import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import Main from './components/templates/Main';

import './style.css';

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};
