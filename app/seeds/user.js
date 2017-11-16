import faker from 'faker';
import _ from 'lodash';
import User from '../modules/user';


function init() {
  const promises = [];

  _.times(20, () => {
    const userPromise = User.create({
      email: `${faker.lorem.word(2, 10)}@${faker.lorem.word(2, 10)}`,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: 1111
    });

    promises.push(userPromise);
  });

  return Promise.all(promises);
}


export default init;
