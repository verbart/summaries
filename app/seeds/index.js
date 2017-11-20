import { MONGO_URI } from '../config';
import mongooseConnector from '../connectors/mongoose-connector';
import userSeeds from './user';
import summarySeeds from './summary';


initSeeds();

async function initSeeds() {
  const mongoConnection = await mongooseConnector(MONGO_URI);

  await mongoConnection.dropDatabase();

  try {
    const users = await userSeeds();
    await summarySeeds(users);

    console.log('Seeding is complete');
  } catch (e) {
    console.error(e);
  } finally {
    mongoConnection.close();
  }
}
