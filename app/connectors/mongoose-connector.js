import mongoose from 'mongoose';


mongoose.Promise = Promise;


export default (mongoUri) => {
  return mongoose
    .connect(mongoUri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((mongodb) => {
      console.log(`Mongo is connected`);

      return mongodb;
    });
};
