import Router from 'koa-router';
import controller from './user.controller';
import UserService from './user.service';


const router = new Router({ prefix: '/users' });

router
  .get('/', controller.index)
  .param('id', UserService.checkUser())
  //   .delete('/:id', auth.hasRole('admin'), controller.destroy)
//   .get('/me', auth.isAuthenticated(), controller.me)
//   .put('/:id/password', auth.isAuthenticated(), controller.changePassword)
  .get('/:id', controller.show);
//   .post('/', controller.create);


export default router.routes();
