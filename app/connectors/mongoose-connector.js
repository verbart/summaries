import mongoose from 'mongoose';


mongoose.Promise = Promise;


export default (mongoUri) => {
  return mongoose
    .connect(mongoUri, { useMongoClient: true })
    .then((mongodb) => {
      console.log(`Mongo is connected`);

      return mongodb;
    });
};
