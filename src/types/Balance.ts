import { objectType, extendType } from 'nexus'	

export const Balance = objectType({
  name: 'Balance',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
    t.model.sub_category()
    t.model.category()
  },
})

export const balanceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.balance()
    t.crud.balances({ filtering: true, ordering: true })
  },
})

export const balanceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBalance()
    t.crud.updateOneBalance()
    t.crud.upsertOneBalance()
    t.crud.deleteOneBalance()

    t.crud.updateManyBalance()
    t.crud.deleteManyBalance()
  },
})