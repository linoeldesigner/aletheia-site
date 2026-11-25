const newsletter = {
  name: 'newsletter',
  title: 'Boletín',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'edition', title: 'Edición (ej: Edición 1)', type: 'string' },
    { name: 'file', title: 'Archivo PDF', type: 'file' },
    { name: 'externalUrl', title: 'URL externa (Google Drive, etc.)', type: 'url' },
    { name: 'publishedAt', title: 'Fecha', type: 'datetime' },
  ],
};
export default newsletter;
