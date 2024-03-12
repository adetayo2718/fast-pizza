import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import CreateUser from "./features/users/CreateUser";
import AppLayout from "./ui/AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order:Id", element: <Order /> },
      { path: "/users", element: <CreateUser /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
