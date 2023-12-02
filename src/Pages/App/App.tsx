import { useRoutes, BrowserRouter } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import Home from "../Home";
import { Locations } from "../Locations";
import { Menu } from "../Menu";
import { About } from "../About";
import { Contact } from "../Contact";

function AppRoutes() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/locations", element: <Locations /> },
    { path: "/menu", element: <Menu /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
