import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema } from 'nexus'
import { join } from 'path'
import * as allTypes from './types'
import { Context } from './Context'

const nexusPrisma = nexusPrismaPlugin({
  prismaClient: (ctx: Context) => ctx.prisma,
})

export const schema = makeSchema({
  types: [allTypes],
  plugins: [nexusPrisma],
  outputs: {
    typegen: join(
      __dirname,
      '..',
      'node_modules/@types/nexus-typegen/index.d.ts'
    ),
    schema: join(__dirname, 'schema.graphql'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: join(__dirname, 'Context.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
})
