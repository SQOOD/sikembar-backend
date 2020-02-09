import { rule } from 'graphql-shield'
import { getUserId, getUserForgot } from '../utils/constants'
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

  isForgotPassword: rule({ cache: 'contextual' })((_parent, _args, ctx: Context) => {
    try {
      const userId = getUserForgot(ctx)
      return Boolean(userId)
    } catch (e) {
      return e
    }
  }),

  isEvaluator: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
    return Boolean(user.role === 'EVALUATOR');
  }),

  isAdmin: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
    return Boolean(user.role === 'ADMIN');
  }),

  isMine: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.prisma.user
      .findOne({
        where: {
          id,
        },
      })
    return user.id === userId
  }),

  isVendor: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
    return Boolean(user.role === 'VENDOR');
  }),

  isMiner: rule()(async (_parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.prisma.user
      .findOne({
        where: {
          id: userId,
        },
      })
    return Boolean(user.role === 'MINER');
  }),
}