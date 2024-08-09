import * as React from "react";
import * as ReactDOM from "react-dom/client";
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Welcome from "/src/views/Welcome.jsx";
import Home from "/src/views/Home.jsx";

function App(){
  return (
      <div>
          <Welcome/>
          <Home/>
      </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
