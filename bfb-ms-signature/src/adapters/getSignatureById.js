import CreateError from 'http-errors';
import { signatureCollection } from '../repositories/index.js';

export const getSignatureById = async (id) => {
  const signature = await signatureCollection.findOne({ _id: id });
  if (!signature) {
    throw new CreateError(404, 'Signature not found');
  }
  signature.id = signature._id;
  delete signature._id;
  return signature;
};
