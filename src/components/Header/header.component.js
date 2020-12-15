import { Component } from "../Component";
import { template } from "./header.template";
import { Storage } from '../../utils/localStorage';

export class Header extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    addListener() {
        const headerLogo = this.component.querySelector('.header__logo');
        const headerButton = this.component.querySelector('.header__button')
        const htmlRoot = document.documentElement;

        headerButton.addEventListener('click', () => {
            Storage.changeTheme();
            htmlRoot.setAttribute('theme', Storage.getTheme());
        })

        headerLogo.addEventListener('click', function clickHandler(event) {
            event.preventDefault();         
        })
    }

    render() {
        this.component = this.compile(template());

        this.addListener();

        return this.component;
    }
}