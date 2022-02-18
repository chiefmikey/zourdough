import Router from '@koa/router';

import notFound from './notFound';
import path from './path';

const router = new Router({ prefix: '/' });

router.use(
  notFound.routes(),
  notFound.allowedMethods(),
  path.routes(),
  path.allowedMethods(),
);

export default router;
