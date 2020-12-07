import Route from "./Route";

export class Router {
    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    addRoute(pathname, component) {
        const route = new Route(pathname, component, {
            rootQuery: this._rootQuery,
        });
        this.routes.push(route);
        return this;
    }

    initRoutes() {
        window.onpopstate = ((event) => {
            this._onRoute(window.location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    navigate(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) return;

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    getRoute(pathname) {
        return this.routes.find((route) => route.match(pathname));
    }
}
