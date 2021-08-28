//Import pages
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Auth from "./auth.routes";
import NoMatch from "../pages/NoMatch";
import { RouteProps } from "react-router";

interface RouteModel extends RouteProps {
  path: string;
  auth?: boolean;
}

const rotas: RouteModel[] = [
  ...Auth,
  { path: '/', component: Home, },
  { path: '/product/:id', component: ProductDetail, },
  { path: '*', component: NoMatch }, //default
];

export default rotas;
