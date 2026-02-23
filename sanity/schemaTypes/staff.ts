import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'staff',
  title: 'Staff Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role (English)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'roleKo', title: 'Role (Korean)', type: 'string' }),
    defineField({ name: 'department', title: 'Department', type: 'string', options: {
      list: ['leadership', 'elementary', 'middle-school', 'high-school', 'support', 'athletics'],
    }}),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio (English)', type: 'text', rows: 4 }),
    defineField({ name: 'bioKo', title: 'Bio (Korean)', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
  },
});
