import Pages  from '../pages';

export interface IRoute {
    component: () => JSX.Element,
    exact: boolean,
    path: string,
    menuText: string,
    title: string
}

const Routes: IRoute[] = [
    {
        component: Pages.Home,
        exact: true,
        path: "/",
        menuText: "Home",
        title: "Home"
    },           
]

export default Routes;