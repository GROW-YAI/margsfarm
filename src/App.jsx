import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import BoafoWidget from "./components/BoafoWidget";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <LandingPage/>,
    },
  ]);

  return (
    <>
      <BoafoWidget />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
