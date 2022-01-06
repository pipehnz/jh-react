import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import 'scss/application.scss';
import Home from 'screens/Home/index';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <Home />
    </QueryClientProvider>
  );
}

export default App;
