import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export default {
  app: {
    name: process.env.SERVICE_NAME,
    port: process.env.PORT,
  },
  stripPrefix: {
    usePrefix: process.env.USE_PREFIX === 'true',
    path: `/api/${process.env.SERVICE_NAME.replace(/-/g, '')}`,
  },
  plugins: {
    swagger: {
      basePath: process.env.USE_PREFIX === 'true' ? `/api/${process.env.SERVICE_NAME.replace(/-/g, '')}` : '/',
    },
  },
  mongo: {
    uri: process.env.MONGO_URI,
    dbName: process.env.MONGO_DB_NAME,
    collection: {
      signatures: process.env.MONGO_COLLECTION_SIGNATURES,
    },
  },
};
