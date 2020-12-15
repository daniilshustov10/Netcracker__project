import { Component} from '../Component';
import { template } from './home.template';
import { throttling, printSize} from '../../utils/throttling';
import { Storage } from '../../utils/localStorage';

export class Home extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    addListener() {
        const htmlRoot = document.documentElement;

        window.addEventListener('resize', throttling(printSize, 3000));

        document.addEventListener('DOMContentLoaded', function() {
            htmlRoot.setAttribute('theme', Storage.getTheme());
        });
    }
  
    render() {
       this.component = this.compile(template());

       this.addListener();

       return this.component;
    }
}