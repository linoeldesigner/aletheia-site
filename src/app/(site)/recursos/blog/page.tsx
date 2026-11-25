import { getPosts } from '@/lib/sanity';
import { urlFor } from '@/sanity/client';

const fallbackPosts = [
  { _id: '1', category: 'Liderazgo', title: '5 principios de liderazgo del Rey David', excerpt: 'Descubre cómo los principios de liderazgo del Rey David pueden aplicarse a tu vida profesional y ministerial hoy.', publishedAt: '2024-11-15', coverImage: null, imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { _id: '2', category: 'Teología', title: 'La gracia en el Nuevo Testamento: una perspectiva práctica', excerpt: 'Un estudio accesible sobre el concepto de gracia y su impacto transformador en la vida cotidiana del creyente.', publishedAt: '2024-11-10', coverImage: null, imgUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&q=80' },
  { _id: '3', category: 'Desarrollo Personal', title: 'Hábitos que transforman: la disciplina con propósito', excerpt: 'Cómo construir hábitos sostenibles que alineen tus metas personales con tu llamado y propósito de vida.', publishedAt: '2024-11-05', coverImage: null, imgUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80' },
];

export const revalidate = 60;

export default async function BlogPage() {
  const cmsPosts = await getPosts();
  const posts = cmsPosts.length > 0 ? cmsPosts : fallbackPosts;

  return (
    <div className="blog-grid">
      {posts.map((p: any) => {
        const imgSrc = p.coverImage ? urlFor(p.coverImage).width(400).url() : p.imgUrl;
        const date = p.publishedAt ? new Date(p.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
        return (
          <article key={p._id} className="b-card rev">
            <div className="b-img"><img src={imgSrc} alt={p.title} /></div>
            <div className="b-body">
              <span className="b-tag">{p.category}</span>
              <h3 className="b-title">{p.title}</h3>
              <p className="b-exc">{p.excerpt}</p>
              <div className="b-meta">{date}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
