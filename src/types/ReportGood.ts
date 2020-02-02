import { objectType, extendType } from 'nexus'	

export const ReportGood = objectType({
  name: 'ReportGood',
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
    t.model.procurement()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const reportGoodQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.reportGood()
    t.crud.reportGoods({ filtering: true, ordering: true })
  },
})

export const reportGoodMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneReportGood()
    t.crud.updateOneReportGood()
    t.crud.upsertOneReportGood()
    t.crud.deleteOneReportGood()

    t.crud.updateManyReportGood()
    t.crud.deleteManyReportGood()
  },
})