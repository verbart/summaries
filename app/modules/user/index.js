import Router from 'koa-router';
// import controller from './user.controller';
// import checkUser from '../../handlers/check-user';


const router = new Router({ prefix: '/users' });

// router
//   .get('/', auth.hasRole('admin'), controller.index)
//   .delete('/:id', auth.hasRole('admin'), controller.destroy)
//   .get('/me', auth.isAuthenticated(), controller.me)
//   .put('/:id/password', auth.isAuthenticated(), controller.changePassword)
//   .get('/:id', auth.isAuthenticated(), controller.show)
//   .post('/', controller.create);


export default router.routes();
