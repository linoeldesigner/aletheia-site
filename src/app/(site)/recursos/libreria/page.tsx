import { getBooks } from '@/lib/sanity';
import { urlFor } from '@/sanity/client';

const fallbackBooks = [
  { _id: '1', title: 'El Emprendedor con Propósito', author: 'José Ramón Alvarez', cover: null },
  { _id: '2', title: 'Fundamentos de Fe', author: 'Mariela Luna de Alvarez', cover: null },
  { _id: '3', title: 'Liderazgo Cristiano Hoy', author: 'Juan Carlos Infante', cover: null },
  { _id: '4', title: 'Mujeres que Transforman', author: 'Hedemarrie Dussan', cover: null },
];

export const revalidate = 60;

export default async function LibreriaPage() {
  const cmsBooks = await getBooks();
  const books = cmsBooks.length > 0 ? cmsBooks : fallbackBooks;

  return (
    <div>
      <div className="lib-grid">
        {books.map((b: any) => (
          <a key={b._id} href={b.fileUrl || b.externalUrl || '#'} className="lib-card rev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="lib-cover" style={b.cover ? {} : { background: 'linear-gradient(135deg, var(--brand), var(--brand-dk))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 28 }}>
              {b.cover ? <img src={urlFor(b.cover).width(160).url()} alt={b.title} /> : '📖'}
            </div>
            <div className="lib-title">{b.title}</div>
            <div className="lib-author">{b.author}</div>
          </a>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <a href="https://aletheialared.com/publicacion_libro" target="_blank" rel="noopener noreferrer" className="btn-dark">Ver todas las publicaciones →</a>
      </div>
    </div>
  );
}
