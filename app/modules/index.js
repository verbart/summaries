import Router from 'koa-router';
import auth from './auth';
import summary from './summary';


const router = new Router({ prefix: '/api' });

router.use(auth);
router.use(summary);


export default router.routes();
