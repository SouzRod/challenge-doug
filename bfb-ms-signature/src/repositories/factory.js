import { v4 } from 'uuid';

export default ({ db, collectionName }) => ({
  insertOne: async (item) => {
    const collection = await db.collection(collectionName);
    return collection.insertOne({ _id: v4(), ...item });
  },
  findOne: async (filter) => {
    const collection = await db.collection(collectionName);
    return collection.findOne(filter);
  },
  findMany: async (filter) => {
    const collection = await db.collection(collectionName);
    return collection.find(filter).toArray();
  },
  updateOne: async (filter, item) => {
    const collection = await db.collection(collectionName);
    return collection.updateOne(filter, { $set: item });
  },
  deleteOne: async (filter) => {
    const collection = await db.collection(collectionName);
    return collection.deleteOne(filter);
  },
});
