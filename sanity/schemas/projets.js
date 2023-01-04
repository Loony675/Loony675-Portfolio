import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projets',
  title: 'Projets',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', description:'Titre du projet', type: 'string'},
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {name: 'summary', title: 'Summary', type: 'text'},

    {name: 'dateStarted', title: 'DateStarted', type: 'date'},
    {name: 'dateEnded', title: 'DateEnded', type: 'date'},
    {name: 'isCurrentlyWorkingHere', title: 'IsCurrentlyWorkingHere', type: 'boolean'},
    {
      name: 'technologies',
      title: 'Stechnologiess',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
    {name: 'linkToBuild', title: 'LinkToBuild', type: 'url'},

  ],
})
