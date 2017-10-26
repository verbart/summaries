import mongoose from 'mongoose';


mongoose.Promise = Promise;


export default (mongoUri) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(mongoUri, { useMongoClient: true })
      .then((mongodb) => {
        resolve(mongodb);
        console.log(`Mongo is connected`);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
