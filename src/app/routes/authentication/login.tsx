import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/forms/login';
import title from '@/assets/title.avif';

export const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 m-auto">
        <img className="self-auto w-full mb-8" src={title} />
        <LoginForm />
      </div>
    </div>
  );
};
