import { objectType, extendType } from 'nexus'	

export const Cashflow = objectType({
  name: 'Cashflow',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
    t.model.category()
  },
})

export const cashflowQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cashflow()
    t.crud.cashflows({ filtering: true, ordering: true })
  },
})

export const cashflowMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCashflow()
    t.crud.updateOneCashflow()
    t.crud.upsertOneCashflow()
    t.crud.deleteOneCashflow()

    t.crud.updateManyCashflow()
    t.crud.deleteManyCashflow()
  },
})