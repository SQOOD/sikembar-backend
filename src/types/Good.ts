import { objectType, extendType } from 'nexus'	

export const Good = objectType({
  name: 'Good',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.name()
    t.model.tkdn()
    t.model.description()
    t.model.category()
    t.model.picture()
    t.model.approved()
    t.model.min_price()
    t.model.max_price()
    t.model.custom()
  },
})

export const goodQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.good()
    t.crud.goods({ filtering: true, ordering: true })
  },
})

export const goodMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneGood()
    t.crud.updateOneGood()
    t.crud.upsertOneGood()
    t.crud.deleteOneGood()

    t.crud.updateManyGood()
    t.crud.deleteManyGood()
  },
})