import fastify from 'fastify';
import swaggerUi from '@fastify/swagger-ui';
import swagger from '@fastify/swagger';
import cors from '@fastify/cors';
import CreateError from 'http-errors';

import config from './config/index.js';
import routes from './src/routes/index.js';

const app = fastify({ logger: true });

app.register(swagger, {
  swagger: {
    info: {
      title: config.app.name,
      version: '1.0.0',
    },
  },
});

app.register(swaggerUi, { routePrefix: `${config.stripPrefix.path}/docs` });

app.register(cors, { origin: (_, cb) => cb(null, true) });

app.register(routes, { prefix: config.stripPrefix.path });

app.setErrorHandler(function (error, request, reply) {
  if (CreateError.isHttpError(error)) {
    this.log.error(error);
    return reply.status(error.statusCode).send(error);
  }
  const newError = new CreateError.InternalServerError(error.message);

  return reply.status(newError.statusCode).send(newError);
});

app.listen({ port: config.app.port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
