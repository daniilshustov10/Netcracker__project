import { Router } from './modules/Router';
import { Home }  from "./components/Home";
import './assets/styles/main.less';

const router = new Router('.app');

router 
    .addRoute('/', Home)
    .initRoutes()

window.router = router;








