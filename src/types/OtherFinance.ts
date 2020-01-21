import { objectType, extendType } from 'nexus'	

export const OtherFinance = objectType({
  name: 'OtherFinance',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
  },
})

export const otherFinanceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.otherFinance()
    t.crud.otherFinances({ filtering: true, ordering: true })
  },
})

export const otherFinanceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneOtherFinance()
    t.crud.updateOneOtherFinance()
    t.crud.upsertOneOtherFinance()
    t.crud.deleteOneOtherFinance()

    t.crud.updateManyOtherFinance()
    t.crud.deleteManyOtherFinance()
  },
})