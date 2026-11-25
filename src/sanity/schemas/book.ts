const book = {
  name: 'book',
  title: 'Libro (Librería Virtual)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'author', title: 'Autor', type: 'string' },
    { name: 'cover', title: 'Portada', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Descripción', type: 'text', rows: 3 },
    { name: 'externalUrl', title: 'Enlace externo', type: 'url' },
    { name: 'file', title: 'Archivo PDF', type: 'file' },
  ],
};
export default book;
