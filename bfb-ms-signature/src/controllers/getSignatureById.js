import * as adapters from '../adapters/getSignatureById.js';

export const getSignatureById = async (request, reply) => {
  const signature = await adapters.getSignatureById(request.params.id);
  return reply.status(200).send(signature);
}
