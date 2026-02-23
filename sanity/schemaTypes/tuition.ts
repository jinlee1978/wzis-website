import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tuition',
  title: 'Tuition',
  type: 'document',
  fields: [
    defineField({ name: 'gradeLevel', title: 'Grade Level (English)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'gradeLevelKo', title: 'Grade Level (Korean)', type: 'string' }),
    defineField({ name: 'semesterFee', title: 'Semester Fee (RMB)', type: 'number', validation: (r) => r.required().min(0) }),
    defineField({ name: 'academicYear', title: 'Academic Year', type: 'string' }),
    defineField({ name: 'discounts', title: 'Discounts/Notes', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'gradeLevel', fee: 'semesterFee' },
    prepare({ title, fee }) {
      return { title, subtitle: fee ? '¥' + fee.toLocaleString() + '/semester' : '' };
    },
  },
});
