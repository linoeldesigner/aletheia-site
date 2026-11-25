const downloadable = {
  name: 'downloadable',
  title: 'Archivo Descargable',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'description', title: 'Descripción', type: 'text', rows: 3 },
    { name: 'icon', title: 'Emoji icono', type: 'string' },
    { name: 'file', title: 'Archivo', type: 'file' },
    { name: 'externalUrl', title: 'URL externa (alternativa a archivo)', type: 'url' },
    { name: 'category', title: 'Categoría', type: 'string', options: { list: [
      { title: 'Guía', value: 'guia' },
      { title: 'Plantilla', value: 'plantilla' },
      { title: 'Herramienta', value: 'herramienta' },
    ]}},
  ],
};
export default downloadable;
