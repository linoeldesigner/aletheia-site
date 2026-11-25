const post = {
  name: 'post',
  title: 'Artículo de Blog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'coverImage', title: 'Imagen de portada', type: 'image', options: { hotspot: true } },
    { name: 'excerpt', title: 'Extracto', type: 'text', rows: 3 },
    { name: 'body', title: 'Contenido', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
    { name: 'category', title: 'Categoría', type: 'string', options: { list: [
      { title: 'Liderazgo', value: 'liderazgo' },
      { title: 'Teología', value: 'teologia' },
      { title: 'Desarrollo Personal', value: 'desarrollo-personal' },
      { title: 'Emprendimiento', value: 'emprendimiento' },
      { title: 'Educación', value: 'educacion' },
    ]}},
    { name: 'author', title: 'Autor', type: 'string' },
    { name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime' },
  ],
  orderings: [{ title: 'Fecha', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
};
export default post;
