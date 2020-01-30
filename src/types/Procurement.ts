import { objectType, extendType } from 'nexus'	

export const Procurement = objectType({
  name: 'Procurement',
  definition(t) {
    t.model.id()
    t.model.report_good()
    t.model.detail()
    t.model.spec()
    t.model.volume_unit()
    t.model.volume_value()
    t.model.unit_price_type()
    t.model.unit_price()
    t.model.category()
    t.model.project_area()
    t.model.country_of_origin()
    t.model.province_of_origin()
    t.model.district_of_origin()
    t.model.current_district()
    t.model.tkdn()
    t.model.tkdn_type()
  },
})

export const procurementQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.procurement()
    t.crud.procurements({ filtering: true, ordering: true })
  },
})

export const procurementMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneProcurement()
    t.crud.updateOneProcurement()
    t.crud.upsertOneProcurement()
    t.crud.deleteOneProcurement()

    t.crud.updateManyProcurement()
    t.crud.deleteManyProcurement()
  },
})