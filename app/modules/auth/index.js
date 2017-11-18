import Router from 'koa-router';
import controller from './auth.controller';
import Auth from './auth.service';


const router = new Router({ prefix: '/auth' });

router
  .post('/signup', controller.signUp)
  .post('/signin', controller.signIn)
  .get('/private', Auth.isAuthenticated(), (ctx) => {
    ctx.body = ctx.user;
  });


export default router.routes();
