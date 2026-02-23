import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'collegeAcceptance',
  title: 'College Acceptance',
  type: 'document',
  fields: [
    defineField({ name: 'university', title: 'University Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'country', title: 'Country', type: 'string' }),
    defineField({ name: 'classYear', title: 'Class Year', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'region', title: 'Region', type: 'string', options: {
      list: ['north-america', 'europe', 'asia', 'oceania', 'other'],
    }}),
    defineField({ name: 'logo', title: 'University Logo', type: 'image' }),
  ],
  preview: {
    select: { title: 'university', year: 'classYear', country: 'country' },
    prepare({ title, year, country }) {
      return { title, subtitle: 'Class of ' + year + (country ? ' — ' + country : '') };
    },
  },
});
