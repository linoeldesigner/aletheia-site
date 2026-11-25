'use client';
import { useState } from 'react';
import Link from 'next/link';

const areas = [
  { label: 'ALÉ EMPRENDIMIENTOS', color: 'var(--neg)', href: '/cursos?area=emprendimientos' },
  { label: 'ALÉ TEOLOGÍA', color: 'var(--teo)', href: '/cursos?area=teologia' },
  { label: 'ALÉ EDUCACIÓN', color: 'var(--edu)', href: '/cursos?area=educacion' },
  { label: 'ALÉ PERSONAL', color: 'var(--per)', href: '/cursos?area=personal' },
];

const recursos = [
  { label: 'Blog', href: '/recursos/blog' },
  { label: 'Boletines', href: '/recursos/boletines' },
  { label: 'Librería Virtual', href: '/recursos/libreria' },
  { label: 'Descargables', href: '/recursos/descargables' },
];

export default function Navbar() {
  const [mobOpen, setMobOpen] = useState(false);

  const closeMobile = () => setMobOpen(false);

  return (
    <nav id="nav">
      <Link href="/" className="nav-logo" onClick={closeMobile}>
        <img src="/images/logo.svg" alt="Alétheia" />
      </Link>

      <ul className="nav-links">
        <li><Link href="/">Inicio</Link></li>
        <li>
          <a href="#" onClick={(e) => e.preventDefault()}>Programas <span className="chevron">▾</span></a>
          <div className="nav-dd">
            {areas.map((a) => (
              <Link key={a.label} href={a.href} className="dd-item">
                <span className="dd-dot" style={{ background: a.color }} />
                {a.label}
              </Link>
            ))}
            <Link href="/cursos" className="dd-item" style={{ borderTop: '1px solid var(--border)', marginTop: 4, paddingTop: 14 }}>
              <span className="dd-dot" style={{ background: 'var(--brand)' }} />
              Todos los programas
            </Link>
          </div>
        </li>
        <li>
          <a href="#" onClick={(e) => e.preventDefault()}>Recursos <span className="chevron">▾</span></a>
          <div className="nav-dd">
            {recursos.map((r) => (
              <Link key={r.label} href={r.href} className="dd-item">{r.label}</Link>
            ))}
          </div>
        </li>
        <li><Link href="/comunidad">Comunidad</Link></li>
        <li><Link href="/nosotros">Nosotros</Link></li>
        <li><Link href="/contacto">Contáctanos</Link></li>
        <li><Link href="/cursos" className="nav-cta">Ver cursos →</Link></li>
      </ul>

      <button className={`ham${mobOpen ? ' open' : ''}`} onClick={() => setMobOpen(!mobOpen)} aria-label="Menú">
        <span /><span /><span />
      </button>

      {/* Mobile overlay */}
      <div className={`mob-overlay${mobOpen ? ' open' : ''}`} onClick={closeMobile} />
      <div className={`mob-menu${mobOpen ? ' open' : ''}`}>
        <div className="mob-section">
          <div className="mob-label">Navegación</div>
          <Link href="/" className="mob-lnk" onClick={closeMobile}>Inicio</Link>
          <Link href="/comunidad" className="mob-lnk" onClick={closeMobile}>Comunidad</Link>
          <Link href="/nosotros" className="mob-lnk" onClick={closeMobile}>Nosotros</Link>
          <Link href="/contacto" className="mob-lnk" onClick={closeMobile}>Contáctanos</Link>
        </div>
        <div className="mob-section">
          <div className="mob-label">Programas</div>
          {areas.map((a) => (
            <Link key={a.label} href={a.href} className="mob-lnk" onClick={closeMobile}>
              <span className="mob-dot" style={{ background: a.color }} />
              {a.label}
            </Link>
          ))}
        </div>
        <div className="mob-section">
          <div className="mob-label">Recursos</div>
          {recursos.map((r) => (
            <Link key={r.label} href={r.href} className="mob-lnk" onClick={closeMobile}>{r.label}</Link>
          ))}
        </div>
        <Link href="/cursos" className="mob-cta-btn" onClick={closeMobile}>Ver cursos →</Link>
      </div>
    </nav>
  );
}
