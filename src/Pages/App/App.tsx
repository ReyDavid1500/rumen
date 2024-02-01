import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Locations from "../Locations";
import Menu from "../Menu";
import About from "../About";
import Contact from "../Contact";
import Shopping from "../Shopping";
import ShoppingCart from "../ShoppingCart";
import SignUp from "../SignUp";
import SubmitOrder from "../SubmitOrder";
import RumenAccount from "../RumenAccount";
import RumenSignUp from "../RumenSignUp";
import RumenProducts from "../RumenProducts";
import RumenForm from "../RumenForm";
import { ShoppingCartProvider } from "../../context/shoppingCartContext";

function AppRoutes() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/locations", element: <Locations /> },
    { path: "/menu", element: <Menu /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/shopping", element: <Shopping /> },
    { path: "/cart", element: <ShoppingCart /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/order", element: <SubmitOrder /> },
    { path: "/rumen-account", element: <RumenAccount /> },
    { path: "/rumen-signup", element: <RumenSignUp /> },
    { path: "/rumen-products", element: <RumenProducts /> },
    { path: "/rumen-form", element: <RumenForm /> },
  ]);
  return routes;
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
