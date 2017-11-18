import User from './user.model';
// import UserService from './user.service';


export default {
  async index(ctx) {
    const users = await User.find();

    ctx.body = { data: users };
  },

  async show(ctx) {
    const { user } = ctx;

    ctx.body = { data: user };
  }
};
