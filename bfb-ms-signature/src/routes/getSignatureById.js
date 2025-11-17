import * as controllers from '../controllers/getSignatureById.js';

export const getSignatureById = {
  url: '/v1/signature/:id',
  method: 'GET',
  handler: controllers.getSignatureById,
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  },
};
