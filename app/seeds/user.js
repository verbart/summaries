import faker from 'faker';
import _ from 'lodash';
import { User } from '../modules/users';


function init() {
  const promises = [];

  _.times(20, () => {
    const userPromise = User.create({
      email: `${faker.lorem.word(2, 10)}@${faker.lorem.word(2, 10)}`,
      firstName: faker.lorem.word(2, 10),
      lastName: faker.lorem.word(2, 10),
      password: 1111
    });

    promises.push(userPromise);
  });

  return Promise.all(promises);
}


export default init;
