import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', description: 'Titre du skill', type: 'string'},
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progrès du skill de 0 à 100%',
      validation: (Rule) => Rule.min(0).max(100),
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
  ],
})
