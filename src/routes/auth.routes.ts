//Import pages
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { RouteProps } from "react-router";

interface RouteModel extends RouteProps {
    path: string;
    auth?: boolean;
}

const rotas: RouteModel[] = [
    { path: '/login', component: Login, },
    { path: '/profile', auth: true, component: Profile },
];

export default rotas;
