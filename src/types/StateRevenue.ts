import { objectType, extendType } from 'nexus'	

export const StateRevenue = objectType({
  name: 'StateRevenue',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
    t.model.category()
  },
})

export const stateRevenueQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.stateRevenue()
    t.crud.stateRevenues({ filtering: true, ordering: true })
  },
})

export const stateRevenueMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneStateRevenue()
    t.crud.updateOneStateRevenue()
    t.crud.upsertOneStateRevenue()
    t.crud.deleteOneStateRevenue()

    t.crud.updateManyStateRevenue()
    t.crud.deleteManyStateRevenue()
  },
})