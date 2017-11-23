import pick from 'lodash/pick';
import Summary from './summary.model';
import SummaryService from './summary.service';
import parseQueryForSearch from './helpers/parse-query-for-search';


export default {
  async index(ctx) {
    const queryParams = pick(ctx.request.query, ['title', 'tags', 'size', 'page']);
    const filter = parseQueryForSearch(queryParams);

    const { summaries, ...rest } = await SummaryService.searchSummary(filter);

    ctx.body = {
      ...rest,
      filter,
      data: summaries
    };
  },

  async show(ctx) {
    const { state: { summary } } = ctx;

    ctx.body = { data: summary };
  },

  async create(ctx) {
    const summaryData = {
      ...pick(ctx.request.body, Summary.createFields),
      userId: ctx.state.user._id
    };

    const { _id } = await SummaryService.createSummary(summaryData);
    const summary = await Summary.findOne({ _id });

    ctx.status = 201;
    ctx.body = { data: summary };
  },

  async update(ctx) {
    const {
      request: {
        body
      },
      state: {
        user: {
          _id: userId
        },
        summary
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
      state: {
        user: {
          _id: userId
        },
        summary
      }
    } = ctx;

    if (summary.userId !== userId.toHexString()) {
      ctx.throw(403, `Forbidden. Summary with id "${summary._id}" do not belong user with id "${userId}"`);
    }

    await summary.remove();

    ctx.body = { data: { id: summary._id } };
  }
};
