import { AppProvider } from '@/app/providers/app';
import { AppRouter } from '@/app/router';

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
