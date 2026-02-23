import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'job',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job Title (English)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'titleKo', title: 'Job Title (Korean)', type: 'string' }),
    defineField({ name: 'department', title: 'Department', type: 'string', options: {
      list: ['elementary', 'middle-school', 'high-school', 'athletics', 'support', 'administration'],
    }}),
    defineField({ name: 'description', title: 'Description (English)', type: 'text', rows: 6 }),
    defineField({ name: 'descriptionKo', title: 'Description (Korean)', type: 'text', rows: 6 }),
    defineField({ name: 'requirements', title: 'Requirements (English)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'requirementsKo', title: 'Requirements (Korean)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'isActive', title: 'Active', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'title', active: 'isActive' },
    prepare({ title, active }) {
      return { title, subtitle: active ? 'Active' : 'Inactive' };
    },
  },
});
