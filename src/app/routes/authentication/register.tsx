import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/forms/login';
import title from '@/assets/title.avif';
import { RegisterForm } from '@/components/forms/register';

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="w-1/3 m-auto">
        <img className="self-auto w-full mb-8" src={title} />
        <RegisterForm />
      </div>
    </div>
  );
};
