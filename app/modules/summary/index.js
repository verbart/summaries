import Router from 'koa-router';
import controller from './summary.controller';
import SummaryService from './summary.service';
// import Auth from '../auth/auth.service';


const router = new Router({ prefix: '/summaries' });

router
  .get('/', controller.index)
  .param('id', SummaryService.checkSummary())
  .get('/:id', controller.show)
  .post('/', controller.create)
  .put('/:id', controller.update)
  .patch('/:id', controller.update)
  .delete('/:id', controller.destroy);


export default router.routes();
