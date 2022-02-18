import Router from '@koa/router';

const router = new Router({ prefix: '/404' });

router.get('/', async (context) => {
  try {
    context.response.status = 200;
    context.response.type = 'html';
    context.response.body = '<h1>404</h1>';
  } catch (error) {
    console.error('error with get', error);
    context.response.status = 200;
  }
});

export default router;
