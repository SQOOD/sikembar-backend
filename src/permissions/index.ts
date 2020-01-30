import { shield, allow } from 'graphql-shield'
import { rules } from './rules'

export const permissions = shield({
  Query: {
    '*': allow, //rules.isAuthenticatedUser,
  },
  Mutation: {
    '*': rules.isAuthenticatedUser,
    signup: rules.isAdmin,
    login: allow,
  },
})
