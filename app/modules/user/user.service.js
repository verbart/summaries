import User from './user.model';


export default {
  async createUser(data) {
    try {
      return await User.create(data);
    } catch (e) {
      throw new AppError({ status: 400, ...e});
    }
  },

  checkUser: () => async (_id, ctx, next) => {
    const user = await User.findOne({ _id });

    if (!user) {
      ctx.throw(404, `User with id "${_id}" not found`);
    }

    ctx.user = user;

    await next();
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
