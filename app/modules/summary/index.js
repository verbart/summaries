import Router from 'koa-router';
import controller from './summary.controller';
import SummaryService from './summary.service';
import Auth from '../auth/auth.service';


const router = new Router({ prefix: '/summaries' });

router
  .get('/', controller.index)
  .param('id', SummaryService.checkSummary())
  .get('/:id', controller.show)
  .post('/', Auth.isAuthenticated(), controller.create)
  .put('/:id', Auth.isAuthenticated(), controller.update)
  .patch('/:id', Auth.isAuthenticated(), controller.update)
  .delete('/:id', Auth.isAuthenticated(), controller.destroy);


export default router.routes();
