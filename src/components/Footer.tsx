import Link from 'next/link';

interface FooterProps {
  condensed?: boolean;
}

export default function Footer({ condensed = false }: FooterProps) {
  if (condensed) {
    return (
      <footer className="site-footer" style={{ padding: '32px 48px' }}>
        <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
          <span>© 2025 Alétheia — Red de Aprendizaje Cristiana · CACVA</span>
          <div className="footer-social">
            <a href="https://www.youtube.com/@aletheiareddeemprendimiento" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
            <a href="https://aletheialared.com" target="_blank" rel="noopener noreferrer" aria-label="Web">🌐</a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <img src="/images/logo.svg" alt="Alétheia" style={{ height: 28, filter: 'brightness(0) invert(1)', marginBottom: 4 }} />
          <p className="footer-desc">Red de aprendizaje cristiana dedicada a la formación integral de líderes, emprendedores y educadores en América Latina.</p>
          <p className="footer-verse">&ldquo;Y conoceréis la verdad, y la verdad os hará libres.&rdquo; — Juan 8:32</p>
        </div>
        <div className="footer-col">
          <h5>Programas</h5>
          <Link href="/cursos?area=emprendimientos"><span className="f-dot" style={{ background: 'var(--neg)' }} /> Emprendimientos</Link>
          <Link href="/cursos?area=teologia"><span className="f-dot" style={{ background: 'var(--teo)' }} /> Teología</Link>
          <Link href="/cursos?area=educacion"><span className="f-dot" style={{ background: 'var(--edu)' }} /> Educación</Link>
          <Link href="/cursos?area=personal"><span className="f-dot" style={{ background: 'var(--per)' }} /> Personal</Link>
        </div>
        <div className="footer-col">
          <h5>Recursos</h5>
          <Link href="/recursos/blog">Blog</Link>
          <Link href="/recursos/boletines">Boletines</Link>
          <Link href="/recursos/libreria">Librería Virtual</Link>
          <Link href="/recursos/descargables">Descargables</Link>
        </div>
        <div className="footer-col">
          <h5>Comunidad</h5>
          <Link href="/comunidad">Testimonios</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto">Contáctanos</Link>
          <a href="https://www.youtube.com/@aletheiareddeemprendimiento" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Alétheia — Red de Aprendizaje Cristiana · CACVA</span>
        <div className="footer-social">
          <a href="https://www.youtube.com/@aletheiareddeemprendimiento" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
          <a href="https://aletheialared.com" target="_blank" rel="noopener noreferrer" aria-label="Web">🌐</a>
        </div>
      </div>
    </footer>
  );
}
