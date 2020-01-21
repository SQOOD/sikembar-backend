import { objectType, extendType } from 'nexus'	

export const OperationCost = objectType({
  name: 'OperationCost',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
  },
})

export const operationCostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.operationCost()
    t.crud.operationCosts({ filtering: true, ordering: true })
  },
})

export const operationCostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneOperationCost()
    t.crud.updateOneOperationCost()
    t.crud.upsertOneOperationCost()
    t.crud.deleteOneOperationCost()

    t.crud.updateManyOperationCost()
    t.crud.deleteManyOperationCost()
  },
})