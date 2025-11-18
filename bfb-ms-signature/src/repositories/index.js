import factory from './factory.js';
import { mongoDb } from '../../database/index.js';
import config from '../../config/index.js';

export const signatureCollection = factory({
  db: mongoDb,
  collectionName: config.mongo.collection.signatures,
});
