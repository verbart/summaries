export default {
  isAuthenticated: () => async (ctx, next) => {
    if (!ctx.state.user) {
      ctx.throw(403, { message: 'Forbidden' });
    }

    await next();
  }
};
