import Router from 'koa-router';
import controller from './auth.controller';
import checkUser from '../../handlers/check-user';


const router = new Router({ prefix: '/auth' });

router
  .post('/signup', controller.signUp)
  .post('/signin', controller.signIn)
  .get('/private', checkUser(), (ctx) => {
    ctx.body = ctx.user;
  });


export default router.routes();
