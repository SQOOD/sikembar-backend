import { objectType, extendType } from 'nexus'	

export const Investment = objectType({
  name: 'Investment',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
  },
})

export const investmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.investment()
    t.crud.investments({ filtering: true, ordering: true })
  },
})

export const investmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneInvestment()
    t.crud.updateOneInvestment()
    t.crud.upsertOneInvestment()
    t.crud.deleteOneInvestment()

    t.crud.updateManyInvestment()
    t.crud.deleteManyInvestment()
  },
})