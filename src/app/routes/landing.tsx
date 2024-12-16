import { getUser } from '@/lib/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await getUser();

      if (response) navigate('/app');
      else navigate('/auth/login');
    };

    checkAuth();
  }, []);
};

export default Landing;
