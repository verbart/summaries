import pick from 'lodash/pick';
import Summary from './summary.model';
import SummaryService from './summary.service';


export default {
  async index(ctx) {
    const summaries = await Summary.find();

    ctx.body = { data: summaries };
  },

  async show(ctx) {
    const { summary } = ctx;

    ctx.body = { data: summary };
  },

  async create(ctx) {
    const summaryData = {
      ...pick(ctx.request.body, Summary.createFields),
      userId: ctx.user._id
    };

    const { _id } = await SummaryService.createSummary(summaryData);
    const summary = await Summary.findOne({ _id });

    ctx.status = 201;
    ctx.body = { data: summary };
  },

  async update(ctx) {
    const {
      summary,
      request: {
        body
      },
      user: {
        _id: userId
      }
    } = ctx;

    if (summary.userId !== userId.toHexString()) {
      ctx.throw(403, `Forbidden. Summary with id "${summary._id}" do not belong user with id "${userId}"`);
    }

    const newData = pick(body, Summary.createFields);
    const updatedSummary = await SummaryService.updateSummary(newData, summary);

    ctx.body = { data: updatedSummary };
  },

  async destroy(ctx) {
    const {
      summary,
      user: {
        _id: userId
      }
    } = ctx;

    if (summary.userId !== userId.toHexString()) {
      ctx.throw(403, `Forbidden. Summary with id "${summary._id}" do not belong user with id "${userId}"`);
    }

    await summary.remove();

    ctx.body = { data: { id: summary._id } };
  }
};
