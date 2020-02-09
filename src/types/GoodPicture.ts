import { objectType, extendType } from 'nexus'	

export const GoodPicture = objectType({
  name: 'GoodPicture',
  definition(t) {
    t.model.id()
    t.model.good()
    t.model.image()
  },
})

export const goodPictureQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.goodPicture()
    t.crud.goodPictures({ filtering: true, ordering: true })
  },
})

export const goodPictureMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneGoodPicture()
    t.crud.updateOneGoodPicture()
    t.crud.upsertOneGoodPicture()
    t.crud.deleteOneGoodPicture()

    t.crud.updateManyGoodPicture()
    t.crud.deleteManyGoodPicture()
  },
})