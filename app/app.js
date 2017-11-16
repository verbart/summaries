import Koa from 'koa';
import connectorsInit from './connectors';
import initHandlers from './handlers';
import modules from './modules';

connectorsInit();

const app = new Koa();

initHandlers(app);

app.use(modules);

app.use(async (ctx) => {
  ctx.status = 404;
  ctx.body = `<h1 align="center">Error 404. Resource not found</h1>`;
});


export default app;
