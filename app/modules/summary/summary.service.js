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

    try {
      summary.save();
    } catch (e) {
      throw new AppError({ status: 400, ...e });
    }
  },

  checkSummary: () => async (_id, ctx, next) => {
    const summary = await Summary.findOne({ _id });

    if (!summary) {
      ctx.throw(404, `Summary with id "${_id}" not found`);
    }

    ctx.state.summary = summary;

    await next();
  },

  async searchSummary({ size, page, title, tags }) {
    const query = {
      title: { $regex: new RegExp(title, 'ig') }
    };

    if (tags.length) {
      query.tags = { $in: tags };
    }

    const count = await Summary
      .count(query)
      .sort({ updatedAt: '-1' });
    const pages = Math.ceil(count / size);
    const summaries = await Summary
      .find(query)
      .sort({ updatedAt: '-1' })
      .limit(size)
      .skip((page - 1) * size);

    return {
      summaries,
      count,
      pages
    };
  }
};
