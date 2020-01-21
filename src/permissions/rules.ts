import { rule } from 'graphql-shield'
import { getUserId } from '../utils/constants'
import { Context } from '../Context'

export const rules = {
  isAuthenticatedUser: rule({ cache: 'contextual' })((_parent, _args, ctx: Context) => {
    try {
      const userId = getUserId(ctx)
      return Boolean(userId)
    } catch (e) {
      return e
    }
  }),

  isStaff: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.photon.users
      .findOne({
        where: {
          id: userId,
        },
      })
    return Boolean(user.role === 'STAFF');
  }),

  isAdmin: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.photon.users
      .findOne({
        where: {
          id: userId,
        },
      })
    return Boolean(user.role === 'ADMIN');
  }),

  isMine: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.photon.users
      .findOne({
        where: {
          id,
        },
      })
    return user.id === userId
  }),

  isVendor: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.photon.users
      .findOne({
        where: {
          id: userId,
        },
      })
    return Boolean(user.role === 'VENDOR');
  }),

  isMiner: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.photon.users
      .findOne({
        where: {
          id: userId,
        },
      })
    return Boolean(user.role === 'MINER');
  }),
}