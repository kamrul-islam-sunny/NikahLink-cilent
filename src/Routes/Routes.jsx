import {
    createBrowserRouter,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-3xl">Hello world! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, culpa!</div>,
    },
  ]);

export default router;
