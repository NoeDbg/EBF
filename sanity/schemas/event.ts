export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'date', type: 'date' },
    { name: 'location', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'registerUrl', type: 'url' }
  ]
};
