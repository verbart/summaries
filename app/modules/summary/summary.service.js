import Summary from './summary.model';


export default {
  async createSummary(data) {
    const { userId } = data;
    const summaryCountByUserId = await Summary.count({ userId });

    if (summaryCountByUserId === 3) {
      throw new AppError({ status: 400, message: 'User cannot create more 3 summary' });
    }

    return Summary.create(data);
  },

  async updateSummary(data, summary) {
    summary.set(data);

    return summary.save();
  },

  checkSummary: () => async (_id, ctx, next) => {
    const summary = await Summary.findOne({ _id });

    if (!summary) {
      ctx.throw(404, `Summary with id "${_id}" not found`);
    }

    ctx.summary = summary;

    await next();
  }
};
