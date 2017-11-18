import faker from 'faker';
import _ from 'lodash';
import uuid from 'uuid/v4';
import User from '../modules/user/user.model';


function init() {
  const promises = [];

  _.times(20, () => {
    const userPromise = User.create({
      hash: uuid(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: 1111
    });

    promises.push(userPromise);
  });

  return Promise.all(promises);
}


export default init;
