import { Component} from '../Component';
import { template } from './home.template';
import { throttling, printSize} from '../../utils/throttling';

export class Home extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    addListener() {
        window.addEventListener('resize', throttling(printSize, 3000));
    }
  
    render() {
       this.component = this.compile(template());

       this.addListener();

       return this.component;
    }
}