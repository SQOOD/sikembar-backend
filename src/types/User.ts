import { objectType, extendType } from 'nexus'	

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.username()
    t.model.password()
    t.model.company_permission()
    t.model.picture()
    t.model.role()
    t.model.commodity()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.wiup()
    t.model.npwp()
    t.model.email()
    t.model.phone()
    t.model.company_type()
    t.model.company_name()
    t.model.address()
    t.model.report_finance()
    t.model.report_good()
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