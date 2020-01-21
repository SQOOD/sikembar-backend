import { objectType, extendType } from 'nexus'	

export const Fuel = objectType({
  name: 'Fuel',
  definition(t) {
    t.model.id()
    t.model.report_finance()
    t.model.currency()
    t.model.rate()
    t.model.price()
  },
})

export const fuelQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.fuel()
    t.crud.fuels({ filtering: true, ordering: true })
  },
})

export const fuelMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFuel()
    t.crud.updateOneFuel()
    t.crud.upsertOneFuel()
    t.crud.deleteOneFuel()

    t.crud.updateManyFuel()
    t.crud.deleteManyFuel()
  },
})