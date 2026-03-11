export default {
  name: 'fundEntry',
  title: 'Fund Entry',
  type: 'document',
  fields: [
    { name: 'date', type: 'date' },
    { name: 'value', type: 'number' },
    { name: 'period', type: 'string', options: { list: ['week', 'month', 'year'] } },
    { name: 'positions', type: 'array', of: [{ type: 'string' }] }
  ]
};
