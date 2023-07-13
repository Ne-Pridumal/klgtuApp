import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "./layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        path="select"
        element={<div>select</div>}
      />
    </Route>
  )
);


export const NavigationProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}
