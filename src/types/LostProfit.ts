import { objectType, extendType } from 'nexus'	

export const LostProfit = objectType({
  name: 'LostProfit',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
  },
})

export const lostProfitQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lostProfit()
    t.crud.lostProfits({ filtering: true, ordering: true })
  },
})

export const lostProfitMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneLostProfit()
    t.crud.updateOneLostProfit()
    t.crud.upsertOneLostProfit()
    t.crud.deleteOneLostProfit()

    t.crud.updateManyLostProfit()
    t.crud.deleteManyLostProfit()
  },
})