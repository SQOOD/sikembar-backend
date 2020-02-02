import {
  mutationField,
  stringArg,
  arg,
  queryField
} from 'nexus'
import { getUserId } from '../utils/constants'
import { compare, hash } from 'bcrypt'
import {
  generateAccessToken,
  generateRefreshToken,
  handleError,
} from '../utils/helpers'
import { errors } from '../utils/errors'

export const me = queryField('me', {
  type: 'User',
  resolve(_parent, _args, ctx) {
    const userId = getUserId(ctx)
    return ctx.photon.users.findOne({
      where: {
        id: userId,
      },
    })
  },
})

export const signup = mutationField('signup', {
  type: 'AuthPayload',
  args: {
    username: stringArg({ required: true }),
    password: stringArg({ required: true }),
    company_permission: arg({ type: "CompanyPermission" }),
    picture: stringArg({ nullable : true }),
    role: stringArg({ required: true }),
    commodity: arg({ type: "Commodity" }),
    wiup: stringArg({ nullable: true }),
    npwp: stringArg({ nullable: true }),
    email: stringArg({ nullable: true }),
    phone: stringArg({ nullable: true }),
    company_type: arg({ type: "CompanyType" }),
    company_name: stringArg({ nullable: true }),
    address: stringArg({ nullable: true }),
  },
  resolve: async (_parent, { 
    username,
    password,
    company_permission,
    picture,
    role,
    commodity,
    wiup,
    npwp,
    email,
    phone,
    company_name,
    company_type,
    address,
  }, ctx) => {
    const hashedPassword = await hash(password, 10)
    const user = await ctx.photon.users.create({
      data: {
        username,
        password: hashedPassword,
        company_permission,
        picture,
        role,
        commodity,
        company_type,
        company_name,
        wiup,
        npwp,
        email,
        phone,
        address,
      },
    })

    const [accessToken, refreshToken] = [
      generateAccessToken(user.id),
      generateRefreshToken(user.id),
    ]
    ctx.response.cookie('refreshToken', refreshToken, {
      httpOnly: true,
    })
    return {
      accessToken,
      user,
    }
  },
})

export const login = mutationField('login', {
  type: 'AuthPayload',
  args: {
    username: stringArg({ required: true }),
    password: stringArg({ required: true }),
  },
  resolve: async (_parent, { username, password }, ctx) => {
    let user = null
    try {
      user = await ctx.photon.users.findOne({
        where: {
          username,
        },
      })
    } catch (e) {
      handleError(errors.invalidUser)
    }

    if (!user) handleError(errors.invalidUser)

    const passwordValid = await compare(password, user.password)
    if (!passwordValid) handleError(errors.invalidUser)

    const [accessToken, refreshToken] = [
      generateAccessToken(user.id),
      generateRefreshToken(user.id),
    ]
    ctx.response.cookie('refreshToken', refreshToken, {
      httpOnly: true,
    })
    return {
      accessToken,
      user,
    }
  },
})

export const forgotpassword = mutationField('forgotpassword', {
  type: 'AuthPayload',
  args: {
    username: stringArg({ required: true }),
    email: stringArg({ required: true }),
  },
  resolve: async (_parent, { username, email }, ctx) => {
    let user = null
    try {
      user = await ctx.photon.users.findOne({
        where: {
          username,
        },
      })
    } catch (e) {
      handleError(errors.invalidMail)
    }

    if (!user) handleError(errors.invalidMail)

    const emailValid = await compare(email, user.email)
    if (!emailValid) handleError(errors.invalidMail)

    const [accessToken, refreshToken] = [
      generateAccessToken(user.id),
      generateRefreshToken(user.id),
    ]
    ctx.response.cookie('refreshToken', refreshToken, {
      httpOnly: true,
    })
    return {
      accessToken,
      user,
    }
  },
})