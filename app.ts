import path from 'node:path';

import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';

import router from './routes/index';

const port = 3000;

const app = new Koa();

app
  .use(
    cors({
      origin: '*',
      allowMethods: 'GET,POST',
      allowHeaders: '*',
      exposeHeaders: '*',
    }),
  )
  .use(bodyParser())
  .use(serve(path.join(path.resolve(), 'docs')))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, () =>
    console.log(`Koa is listening at http://localhost:${port}`),
  );

export default app;
