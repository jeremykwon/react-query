import { Suspense } from 'react';
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { worker } from "./Mocks/Worker";

import Main from './Components/Main';
import Enabled from './Components/Enabled';
import Queries from './Components/Queries';
import Mutation from './Components/Mutation';


if (process.env.NODE_ENV === "development") {
  worker.start({ onUnhandledRequest: 'bypass'});
}

// 쿼리에 대한 성공, 실패 전처리, 기본 옵션을 줄 수 있다.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
      if (query.state.data !== undefined) {
        alert(`에러가 났어요!!: ${error.message}`);
      }
    },
    onSuccess: data => {
      console.log(data)
    }
  })
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      
      <Suspense fallback={<div>Loading.....</div>}>
        <Main />
      </Suspense>

      <Enabled />

      <Queries />

      <Mutation />
    </QueryClientProvider>
    
  );
}

export default App;
