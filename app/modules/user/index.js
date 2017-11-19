import Router from 'koa-router';
import controller from './user.controller';
import UserService from './user.service';
// import Auth from '../auth/auth.service';


const router = new Router({ prefix: '/users' });

router
  .get('/', controller.index)
  //   .post('/', Auth.hasRole('admin'), controller.create);
  .param('id', UserService.checkUser())
  .get('/:id', controller.show)
  //  .delete('/:id', Auth.hasRole('admin'), controller.destroy)
  //  .put('/:id/password', Auth.hasRole('admin'), controller.changePassword)
  .get('/:id/summaries', controller.getSummariesByUser);


export default router.routes();
