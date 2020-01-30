import { objectType, extendType } from 'nexus'	

export const Assumption = objectType({
  name: 'Assumption',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.currency()
    t.model.rate()
    t.model.detail()
    t.model.volume_unit()
    t.model.volume_value()
    t.model.price()
    t.model.cut_off()
    t.model.cut_off_unit()
  },
})

export const assumptionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.assumption()
    t.crud.assumptions({ filtering: true, ordering: true })
  },
})

export const assumptionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAssumption()
    t.crud.updateOneAssumption()
    t.crud.upsertOneAssumption()
    t.crud.deleteOneAssumption()

    t.crud.updateManyAssumption()
    t.crud.deleteManyAssumption()
  },
})