import { shield, allow } from 'graphql-shield'
import { rules } from './rules'

export const permissions = shield({
  Query: {
    '*': rules.isAuthenticatedUser,
  },
  Mutation: {
    '*': rules.isAuthenticatedUser,
    signup: rules.isAdmin,
    login: allow,
    forgotpassword: allow,
    // resetpassword: rules.isForgotPassword,
  },
})
