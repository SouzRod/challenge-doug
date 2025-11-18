import { MongoClient } from 'mongodb';
import CreateError from 'http-errors';

import config from '../config/index.js';

const state = {
  db: null,
  client: null,
};

async function connectToMongoDB() {
  try {
    state.client = await MongoClient.connect(config.mongo.uri);
    state.db = state.client.db(config.mongo.dbName);
  } catch (err) {
    throw new CreateError(500, `Error on Mongo method connectToMongoDB: [${err}]`);
  }
}

const isConnected = state.db && state.client.topology?.isConnected();

export const mongoDb = {
  async collection(collectionName) {
    if (!isConnected) await connectToMongoDB();
    return state.db.collection(collectionName);
  },
};
