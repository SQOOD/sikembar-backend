import { objectType, extendType } from 'nexus'	

export const ReportFinance = objectType({
  name: 'ReportFinance',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.term()
    t.model.year()
    t.model.report_type()
    t.model.currency()
    t.model.rate()
    t.model.approved()
    t.model.flag_for_deletion()
    t.model.file_path()
    t.model.budgets()
    t.model.royalty()
    t.model.capital_budget()
    t.model.cashflow()
    t.model.assumption()
    t.model.fuel()
    t.model.cost_of_good()
    t.model.investment()
    t.model.other_finance()
    t.model.lost_profit()
    t.model.operation_cost()
    t.model.state_revenue()
    t.model.balance()
    t.model.source_of_funding()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const reportFinanceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.reportFinance()
    t.crud.reportFinances({ filtering: true, ordering: true })
  },
})

export const reportFinanceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneReportFinance()
    t.crud.updateOneReportFinance()
    t.crud.upsertOneReportFinance()
    t.crud.deleteOneReportFinance()

    t.crud.updateManyReportFinance()
    t.crud.deleteManyReportFinance()
  },
})