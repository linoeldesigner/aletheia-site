'use client';
import { useState, useEffect } from 'react';

const areaColors: Record<string, string> = {
  emprendimientos: 'var(--neg)',
  teologia: 'var(--teo)',
  educacion: 'var(--edu)',
  personal: 'var(--per)',
};

const areaLabels: Record<string, string> = {
  emprendimientos: 'Emprendimientos',
  teologia: 'Teología',
  educacion: 'Educación',
  personal: 'Desarrollo Personal',
};

interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  area?: string;
  quote: string;
  avatar?: any;
  rating?: number;
}

interface Props {
  testimonials: Testimonial[];
  urlFor?: (source: any) => { width: (w: number) => { height: (h: number) => { url: () => string } } };
}

export default function TestimonialCarousel({ testimonials, urlFor }: Props) {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="testi-grid-3">
        {visible.map((t) => {
          const color = t.area ? areaColors[t.area] || 'var(--brand)' : 'var(--brand)';
          const label = t.area ? areaLabels[t.area] || t.area : '';
          const stars = '★'.repeat(t.rating || 5) + '☆'.repeat(5 - (t.rating || 5));
          const avatarUrl = t.avatar && urlFor
            ? urlFor(t.avatar).width(80).height(80).url()
            : null;

          return (
            <div key={t._id} className="t-card rev vis">
              {label && (
                <div className="t-area">
                  <span className="t-dot" style={{ background: color }} />
                  {label}
                </div>
              )}
              <div className="t-stars">{stars}</div>
              <p className="t-q">&ldquo;{t.quote}&rdquo;</p>
              <div className="t-auth">
                {avatarUrl ? (
                  <div className="t-av"><img src={avatarUrl} alt={t.name} /></div>
                ) : (
                  <div className="t-av" style={{ background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16 }}>
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="t-nm">{t.name}</div>
                  {t.location && <div className="t-pl">{t.location}</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination dots */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Página ${i + 1}`}
              style={{
                width: page === i ? 28 : 10,
                height: 10,
                borderRadius: 5,
                border: 'none',
                background: page === i ? 'var(--brand)' : 'var(--border)',
                cursor: 'pointer',
                transition: 'all .3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
