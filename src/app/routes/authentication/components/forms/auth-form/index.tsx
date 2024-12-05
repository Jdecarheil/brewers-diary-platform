'use client';
import { Button } from '@/components/ui/button';
import { FormElement } from '@/components/form-item';
import { AuthType } from '@/constants/enum';
import { ControllerProps } from 'react-hook-form';

interface Auth {
  formType: AuthType;
  title: string;
  action: string;
  error: string;
  form: ControllerProps;
}

export const Auth = (props: Auth) => {
  const { formType, title, action, error, form } = props;

  const BaseAuth = () => {
    return (
      <>
        <FormElement
          control={form}
          name="email"
          label="Email"
          description="Enter your preffered email"
        />
        <FormElement
          control={form}
          name="password"
          label="Password"
          description="Enter your password."
        />
      </>
    );
  };

  const Username = () => {
    return (
      <FormElement
        control={form}
        name="username"
        label="Username"
        description="This is your public display name."
      />
    );
  };

  const ConfirmPassword = () => {
    return (
      <FormElement
        control={form}
        name="confirmPassword"
        label="Confirm Password"
        description="Confirm your password."
      />
    );
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 m-auto">
        <img className="self-auto w-full mb-8" src={title} />
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        <Username />
        <BaseAuth />
        {AuthType.Register === formType ? '' : <ConfirmPassword />}
        <Button
          variant={'default'}
          className="bg-main-primary w-full"
          style={{ maxWidth: '100%' }}
          size={'default'}
          type="submit"
        >
          {action}
        </Button>
        <div className="text-center">
          <a className="color-main-primary text-informational" href="/auth/login">
            Back to login
          </a>
        </div>
        <p className="color-error-primary text-informational text-center">{error}</p>
      </div>
    </div>
  );
};
