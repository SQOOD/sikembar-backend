import { objectType, extendType } from 'nexus'	

export const Supply = objectType({
  name: 'Supply',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.detail()
    t.model.value()
  },
})

export const supplyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.supply()
    t.crud.supplies({ filtering: true, ordering: true })
  },
})

export const supplyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSupply()
    t.crud.updateOneSupply()
    t.crud.upsertOneSupply()
    t.crud.deleteOneSupply()

    t.crud.updateManySupply()
    t.crud.deleteManySupply()
  },
})