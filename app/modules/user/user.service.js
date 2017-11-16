import User from './user.model';


export default {
  createUser(data) {
    return User.create(data);
  },

  getUserWithPublicFields(params) {
    return User.findOne(params).select({
      __v: 0,
      password: 0,
      createdAt: 0,
      updatedAt: 0
    });
  }
};
