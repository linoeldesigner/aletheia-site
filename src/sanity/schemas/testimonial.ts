const testimonial = {
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nombre', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'location', title: 'País / Ciudad', type: 'string' },
    { name: 'area', title: 'Área', type: 'string', options: { list: [
      { title: 'Emprendimientos', value: 'emprendimientos' },
      { title: 'Teología', value: 'teologia' },
      { title: 'Educación', value: 'educacion' },
      { title: 'Personal', value: 'personal' },
    ]}},
    { name: 'quote', title: 'Testimonio', type: 'text', rows: 4, validation: (Rule: any) => Rule.required() },
    { name: 'avatar', title: 'Foto', type: 'image', options: { hotspot: true } },
    { name: 'rating', title: 'Estrellas (1-5)', type: 'number', validation: (Rule: any) => Rule.min(1).max(5) },
  ],
};
export default testimonial;
