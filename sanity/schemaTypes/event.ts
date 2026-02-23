import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title (English)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'titleKo', title: 'Title (Korean)', type: 'string' }),
    defineField({ name: 'date', title: 'Event Date', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: {
      list: ['academic', 'sports', 'arts', 'community', 'holiday', 'admissions'],
    }}),
    defineField({ name: 'description', title: 'Description (English)', type: 'text', rows: 4 }),
    defineField({ name: 'descriptionKo', title: 'Description (Korean)', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'title', date: 'date', media: 'image' },
    prepare({ title, date }) {
      return { title, subtitle: date ? new Date(date).toLocaleDateString() : 'No date' };
    },
  },
});
