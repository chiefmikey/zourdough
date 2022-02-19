import { readFileSync, createReadStream } from 'node:fs';
import path from 'node:path';

import Koa from 'koa';
import serve from 'koa-static';

const app = new Koa();
const port = 3000;
const redirect = readFileSync(path.join(path.resolve(), 'docs/404.html'));

app
  .use(serve(path.join(path.resolve(), 'docs')))
  .use(async (context, next) => {
    try {
      if (context.status === 404) {
        const url = context.url.split('public')[1];
        if (url) {
          const path = `docs/public/${url}`;
          console.log(path);
          context.type = 'html';
          context.body = createReadStream(path);
        } else {
          context.type = 'html';
          context.body = createReadStream('docs/404.html');
        }
      } else {
        await next();
      }
    } catch {
      context.type = 'html';
      context.body = redirect;
    }
  })
  .listen(port, () =>
    console.log(`Koa is listening at http://localhost:${port}`),
  );

export default app;
