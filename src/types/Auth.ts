import { mutationField, stringArg } from 'nexus'
import { compare, hash } from 'bcrypt'
import {
  generateAccessToken,
  generateRefreshToken,
  handleError,
} from '../utils/helpers'
import { errors } from '../utils/errors'

export const signup = mutationField('signup', {
  type: 'AuthPayload',
  args: {
    username: stringArg({ required: true }),
    password: stringArg({ required: true }),
    company_type: stringArg({ required: true }),
    picture: stringArg({ nullable : true }),
    role: stringArg({ required: true }),
    commodity: stringArg({ required: true }),
  },
  resolve: async (_parent, { username, password, company_type, picture, role, commodity }, ctx) => {
    const hashedPassword = await hash(password, 10)
    const user = await ctx.photon.users.create({
      data: {
        username,
        password: hashedPassword,
        company_type,
        picture,
        role,
        commodity,
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
