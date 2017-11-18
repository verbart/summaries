import faker from 'faker';
import _ from 'lodash';
import uuid from 'uuid/v4';
import Summary from '../modules/summary/summary.model';


export default (users) => {
  if (!users.length) {
    throw Error('Users is required');
  }

  const promises = [];

  _.times(20, () => {
    const summaryPromise = Summary.create({
      hash: uuid(),
      title: faker.lorem.words(2, 5),
      description: faker.lorem.lines(4, 10),
      tags: faker.lorem.words(2, 6).split(' '),
      userId: users[faker.random.number(0, users.length - 1)]._id
    });

    promises.push(summaryPromise);
  });

  return Promise.all(promises);
};
