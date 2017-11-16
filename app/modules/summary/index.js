import Router from 'koa-router';
import controller from './summary.controller';
import checkUser from '../../handlers/check-user';


const router = new Router({ prefix: '/summaries' });

router
  // .get('/', checkUser(), controller.index)
  // .get('/:id', checkUser(), controller.show)
  .post('/', checkUser(), controller.create)
  .put('/:id', checkUser(), controller.update)
  .patch('/:id', checkUser(), controller.update);
  // .delete('/:id', checkUser(), controller.destroy);


export default router.routes();
