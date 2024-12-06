// import { useNavigate } from 'react-router-dom';

import { useNhostClient } from '@nhost/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import logo from '@/assets/logo.svg';

export const Landing = () => {
  const navigate = useNavigate();

  const user = useNhostClient();
  const isLoggedIn = user.auth.isAuthenticated();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  });

  return <>test</>;
};
