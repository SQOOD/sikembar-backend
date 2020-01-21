import { objectType, extendType } from 'nexus'	

export const Budget = objectType({
  name: 'Budget',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
    t.model.category()
  },
})

export const budgetQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.budget()
    t.crud.budgets({ filtering: true, ordering: true })
  },
})

export const budgetMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBudget()
    t.crud.updateOneBudget()
    t.crud.upsertOneBudget()
    t.crud.deleteOneBudget()

    t.crud.updateManyBudget()
    t.crud.deleteManyBudget()
  },
})