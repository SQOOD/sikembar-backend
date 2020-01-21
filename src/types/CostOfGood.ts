import { objectType, extendType } from 'nexus'	

export const CostOfGood = objectType({
  name: 'CostOfGood',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
    t.model.category()
  },
})

export const costOfGoodQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.costOfGood()
    t.crud.costOfGoods({ filtering: true, ordering: true })
  },
})

export const costOfGoodMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCostOfGood()
    t.crud.updateOneCostOfGood()
    t.crud.upsertOneCostOfGood()
    t.crud.deleteOneCostOfGood()

    t.crud.updateManyCostOfGood()
    t.crud.deleteManyCostOfGood()
  },
})