import Router from 'koa-router';
import auth from './auth';
import user from './user';
import summary from './summary';


const router = new Router({ prefix: '/api' });

router.use(auth);
router.use(user);
router.use(summary);


export default router.routes();
