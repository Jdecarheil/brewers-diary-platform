import logo from '@/assets/title.avif';
import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 m-auto">
        <img
          className="self-auto w-full mb-8"
          alt="logo"
          aria-label="Authentication pages logo heading"
          src={logo}
        />
        <Outlet />
      </div>
    </div>
  );
};
2;
