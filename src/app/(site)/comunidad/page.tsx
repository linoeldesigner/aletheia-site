'use client';
import Footer from '@/components/Footer';

const testimonials = [
  { area: 'Emprendimientos', color: 'var(--neg)', quote: 'Gracias a Alétheia pude estructurar mi emprendimiento con propósito. La metodología UDIER me dio claridad para avanzar paso a paso. Hoy tengo un negocio que honra a Dios y sirve a mi comunidad.', name: 'María González', place: 'Colombia', img: '/images/testimonial-1.webp' },
  { area: 'Teología', color: 'var(--teo)', quote: 'Los cursos de teología me abrieron una perspectiva completamente nueva. Es una formación rigurosa pero accesible y llena de gracia. Cada lección me acercó más a entender el corazón de Dios.', name: 'Carlos Mendoza', place: 'México', img: '/images/testimonial-2.webp' },
  { area: 'Desarrollo Personal', color: 'var(--per)', quote: 'El acompañamiento personalizado marca la diferencia. No es solo un curso, es una comunidad que te impulsa a crecer integralmente. Las herramientas que recibí transformaron mi liderazgo.', name: 'Ana Lucia Rojas', place: 'Perú', img: '/images/testimonial-3.webp' },
];

export default function ComunidadPage() {
  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <h1>Comunidad</h1>
          <p>Testimonios, conexiones y recursos de nuestra red de aprendizaje.</p>
        </div>
      </div>

      <div className="pg-content">
        {/* Testimonials */}
        <div className="rev" style={{ marginBottom: 32 }}>
          <span className="sec-tag">Testimonios</span>
          <h2 className="sec-h">Historias que inspiran</h2>
          <p className="sec-sub">Conoce el impacto de Alétheia en la vida de nuestros socios de aprendizaje.</p>
        </div>

        <div className="testi-full-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="t-card rev">
              <div className="t-area"><span className="t-dot" style={{ background: t.color }} />{t.area}</div>
              <div className="t-stars">★★★★★</div>
              <p className="t-q">&ldquo;{t.quote}&rdquo;</p>
              <div className="t-auth">
                <div className="t-av"><img src={t.img} alt={t.name} /></div>
                <div><div className="t-nm">{t.name}</div><div className="t-pl">{t.place}</div></div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube */}
        <div className="yt-section rev">
          <h3>Síguenos en YouTube</h3>
          <p>Contenido semanal sobre emprendimiento, teología y desarrollo personal.</p>
          <a href="https://www.youtube.com/@aletheiareddeemprendimiento" target="_blank" rel="noopener noreferrer" className="yt-btn">▶ @aletheiareddeemprendimiento</a>
        </div>

        {/* Newsletter */}
        <div className="rev" style={{ textAlign: 'center', margin: '64px auto', maxWidth: 480 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', marginBottom: 10 }}>Únete a nuestra newsletter</h3>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24 }}>Recibe contenido exclusivo, actualizaciones y recursos directamente en tu bandeja de entrada.</p>
          <form style={{ display: 'flex', gap: 10 }} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="tu@email.com" style={{ flex: 1, padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--border)', background: 'var(--light)', fontFamily: 'inherit', fontSize: 14, outline: 'none' }} />
            <button className="btn-primary" type="submit">Suscribirme</button>
          </form>
        </div>
      </div>

      <Footer condensed />
    </>
  );
}
