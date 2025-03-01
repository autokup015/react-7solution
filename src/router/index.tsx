import { createBrowserRouter } from "react-router-dom";

import Layout from "@/layouts/layout";

import { NotFoundPage } from "./notfound";

// --------------------------- Page ---------------------------

import IndexPage from "@/pages/index";

// ---------------------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
    ],
  },

  // NOT FOUND PAGES
  ...NotFoundPage,
]);

export { router };
