import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Locations from "../Locations";
import Menu from "../Menu";
import About from "../About";
import Contact from "../Contact";
import Shopping from "../Shopping";

function AppRoutes() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/locations", element: <Locations /> },
    { path: "/menu", element: <Menu /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/shopping", element: <Shopping /> },
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
