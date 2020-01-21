import { objectType, extendType } from 'nexus'	

export const Royalty = objectType({
  name: 'Royalty',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
  },
})

export const royaltyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.royalty()
    t.crud.royalties({ filtering: true, ordering: true })
  },
})

export const royaltyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneRoyalty()
    t.crud.updateOneRoyalty()
    t.crud.upsertOneRoyalty()
    t.crud.deleteOneRoyalty()

    t.crud.updateManyRoyalty()
    t.crud.deleteManyRoyalty()
  },
})