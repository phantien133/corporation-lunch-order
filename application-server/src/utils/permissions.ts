export const authorize = (authenticate) => async (resolve, parent, args, ctx, info) => {
  authenticate(ctx)
  return resolve()
}


