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

    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },

    {name: 'linkToBuild', title: 'LinkToBuild', type: 'url'},

  ],
})
