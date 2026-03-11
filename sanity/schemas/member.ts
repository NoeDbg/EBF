export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'role', type: 'string' },
    { name: 'pole', type: 'string' },
    { name: 'bio', type: 'text' },
    { name: 'order', type: 'number' },
    { name: 'instagram', type: 'url' }
  ]
};
