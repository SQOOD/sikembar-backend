import { objectType, extendType } from 'nexus'	

export const CapitalBudget = objectType({
  name: 'CapitalBudget',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
  },
})

export const capitalBudgetQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.capitalBudget()
    t.crud.capitalBudgets({ filtering: true, ordering: true })
  },
})

export const capitalBudgetMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCapitalBudget()
    t.crud.updateOneCapitalBudget()
    t.crud.upsertOneCapitalBudget()
    t.crud.deleteOneCapitalBudget()

    t.crud.updateManyCapitalBudget()
    t.crud.deleteManyCapitalBudget()
  },
})