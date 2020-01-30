import { objectType, extendType } from 'nexus'	

export const SourceOfFunding = objectType({
  name: 'SourceOfFunding',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
  },
})

export const sourceOfFundingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sourceOfFunding()
    t.crud.sourceOfFundings({ filtering: true, ordering: true })
  },
})

export const sourceOfFundingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSourceOfFunding()
    t.crud.updateOneSourceOfFunding()
    t.crud.upsertOneSourceOfFunding()
    t.crud.deleteOneSourceOfFunding()

    t.crud.updateManySourceOfFunding()
    t.crud.deleteManySourceOfFunding()
  },
})