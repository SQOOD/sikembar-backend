import { objectType, extendType } from 'nexus'	

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.username()
    t.model.password()
    t.model.company_type()
    t.model.picture()
    t.model.role()
    t.model.commodity()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user()
    t.crud.users({ filtering: true, ordering: true })
  },
})

export const userMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.upsertOneUser()
    t.crud.deleteOneUser()

    t.crud.updateManyUser()
    t.crud.deleteManyUser()
  },
})