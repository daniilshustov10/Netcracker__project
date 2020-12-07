import { Component } from '../Component';
import { template } from './form.template';

export class Form extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    addListener() {
        const formInput = this.component.input;
        const confirmButton = this.component.confirm;

        formInput.addEventListener('input', (function inputHandler(event) {
            
            if (formInput.value.trim().length) {
                confirmButton.removeAttribute('disabled');
                if (!confirmButton.classList.contains('_active')) confirmButton.classList.add('_active');
            } else {
                confirmButton.setAttribute('disabled', 'true');
                confirmButton.classList.remove('_active');
            }

        }).bind(this));
    }

    render() {
        this.component = this.compile(template(this.props));

        this.addListener();

        return this.component;
    }
}