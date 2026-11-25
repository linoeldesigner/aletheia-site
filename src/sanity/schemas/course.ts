const course = {
  name: 'course',
  title: 'Curso',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'area', title: 'Área', type: 'string', options: { list: [
      { title: 'Emprendimientos', value: 'emprendimientos' },
      { title: 'Teología', value: 'teologia' },
      { title: 'Educación', value: 'educacion' },
      { title: 'Personal', value: 'personal' },
    ]}, validation: (Rule: any) => Rule.required() },
    { name: 'description', title: 'Descripción', type: 'text', rows: 3 },
    { name: 'coverImage', title: 'Imagen de portada', type: 'image', options: { hotspot: true } },
    { name: 'price', title: 'Precio', type: 'string' },
    { name: 'isFree', title: '¿Es gratuito?', type: 'boolean', initialValue: false },
    { name: 'duration', title: 'Duración', type: 'string' },
    { name: 'lessons', title: 'Lecciones', type: 'number' },
    { name: 'externalUrl', title: 'URL del curso', type: 'url' },
    { name: 'isComingSoon', title: '¿Próximamente?', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Orden', type: 'number' },
  ],
};
export default course;
