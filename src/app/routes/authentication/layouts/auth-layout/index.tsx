import logo from '@/assets/title.avif';

import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 m-auto">
        <img className="self-auto w-full mb-8" src={logo} />
        <Outlet />
      </div>
    </div>
  );
};
