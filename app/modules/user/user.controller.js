import User from './user.model';
import UserService from './user.service';
import Summary from '../summary/summary.model';


export default {
  async index(ctx) {
    const users = await User.find().select({
      __v: 0,
      password: 0,
      createdAt: 0,
      updatedAt: 0
    });

    ctx.body = { data: users };
  },

  async show(ctx) {
    const { user: { _id } } = ctx;
    const user = await UserService.getUserWithPublicFields({ _id });

    ctx.body = { data: user };
  },

  async getSummariesByUser(ctx) {
    const { user: { _id: userId } } = ctx;
    const summaries = await Summary.find({ userId });

    ctx.body = { data: summaries };
  }
};
