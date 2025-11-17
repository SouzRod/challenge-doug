import factory from './factory.js';
import mongo from '../../database/index.js';
import config from '../../config/index.js';

export const signatureCollection = factory({
  db: mongo,
  collectionName: config.mongo.collection.signatures,
});
