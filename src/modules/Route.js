import renderDOM from "../utils/renderDOM";

class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._view = view;
        this._component = null;
        this._props = props;
    }

    render() {
        if (!this._component) {
            this._component = new this._view().render();
            renderDOM(this._component, this._props.rootQuery);
        }
    }

    leave() {
        if (this._component) {
            this._component.hide();
        }
    }

    match(pathname) {
        return pathname === this._pathname;
    }
}

export default Route;
