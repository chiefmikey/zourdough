import { createReadStream } from 'node:fs';

import Router from '@koa/router';

const router = new Router({ prefix: ':path' });

router.get('/', (context) => {
  try {
    context.response.status = 200;
    context.response.type = 'html';
    context.response.body = createReadStream('docs/index.html');
  } catch (error) {
    console.error('error with get', error);
    context.response.status = 200;
  }
});

router.get('/:path', (context) => {
  try {
    context.response.status = 200;
    context.response.type = 'html';
    context.response.body = createReadStream('docs/index.html');
  } catch (error) {
    console.error('error with get', error);
    context.response.status = 200;
  }
});

export default router;
