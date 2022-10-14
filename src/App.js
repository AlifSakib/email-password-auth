import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ReactBootstrapReg from "./components/ReactBootstrapReg";
import Main from "./layout/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <ReactBootstrapReg></ReactBootstrapReg>,
        },
        {
          path: "/register",
          element: <ReactBootstrapReg></ReactBootstrapReg>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
