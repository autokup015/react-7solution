import "./index.css";

import { routeTree } from "./routeTree.gen";
import NotFoundPage from "./pages/noutfound";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";

// ---------------------------------------------------------------------------------

const router = createRouter({
  routeTree,
  defaultErrorComponent: () => <div>Something went wrong</div>,
  defaultNotFoundComponent: () => <NotFoundPage />,
});

const queryClient = new QueryClient();

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
