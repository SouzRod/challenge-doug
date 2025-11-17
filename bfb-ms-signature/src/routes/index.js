import { getSignatureById } from './getSignatureById.js';

export default (fastify, _, done) => {
  fastify.route(getSignatureById);
  done();
};
