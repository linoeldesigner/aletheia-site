import Link from 'next/link';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { getTestimonials } from '@/lib/sanity';
import { urlFor } from '@/sanity/client';

const paths = [
  { cls: 'neg', label: 'Emprendimientos', title: 'ALÉ EMPRENDIMIENTOS', desc: 'Desarrolla tu idea con propósito y herramientas prácticas.', ico: '/icons/ale-emprendimientos.svg', href: '/cursos?area=emprendimientos' },
  { cls: 'teo', label: 'Teología', title: 'ALÉ TEOLOGÍA', desc: 'Profundiza en la Palabra con rigor y devoción.', ico: '/icons/ale-teologia.svg', href: '/cursos?area=teologia' },
  { cls: 'edu', label: 'Educación', title: 'ALÉ EDUCACIÓN', desc: 'Transforma la enseñanza con métodos innovadores.', ico: '/icons/ale-educacion.svg', href: '/cursos?area=educacion' },
  { cls: 'per', label: 'Personal', title: 'ALÉ PERSONAL', desc: 'Crece integralmente como líder y persona.', ico: '/icons/ale-personal.svg', href: '/cursos?area=personal' },
];

const stats = [
  { n: '500+', l: 'Socios de aprendizaje' },
  { n: '9/10', l: 'Satisfacción promedio' },
  { n: '96%', l: 'Tasa de completación' },
  { n: '+10', l: 'Países alcanzados' },
];

const udierSteps = [
  { letter: 'U', name: 'Ubícate', desc: 'Conoce dónde estás y define el punto de partida de tu formación.' },
  { letter: 'D', name: 'Descubre', desc: 'Explora contenidos, herramientas y conexiones que amplían tu visión.' },
  { letter: 'I', name: 'Identifica', desc: 'Organiza los elementos y pasos que darán forma a tu ruta de aprendizaje.' },
  { letter: 'E', name: 'Evalúa', desc: 'Mide tu progreso con indicadores claros y retroalimentación continua.' },
  { letter: 'R', name: 'Replica', desc: 'Comparte lo aprendido y multiplica el impacto en tu comunidad.' },
];

const testimonials = [
  { area: 'Emprendimientos', color: 'var(--neg)', quote: 'Gracias a Alétheia pude estructurar mi emprendimiento con propósito. La metodología UDIER me dio claridad para avanzar paso a paso.', name: 'María González', place: 'Colombia', img: '/images/testimonial-1.webp' },
  { area: 'Teología', color: 'var(--teo)', quote: 'Los cursos de teología me abrieron una perspectiva completamente nueva. Es una formación rigurosa pero accesible y llena de gracia.', name: 'Carlos Mendoza', place: 'México', img: '/images/testimonial-2.webp' },
  { area: 'Desarrollo Personal', color: 'var(--per)', quote: 'El acompañamiento personalizado marca la diferencia. No es solo un curso, es una comunidad que te impulsa a crecer integralmente.', name: 'Ana Lucia Rojas', place: 'Perú', img: '/images/testimonial-3.webp' },
];

export const revalidate = 60;

export default async function HomePage() {
  const cmsTestimonials = await getTestimonials();
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <span className="hero-ey">Red de Aprendizaje Cristiana</span>
        <h1>Aprende, crece y <em>transforma</em></h1>
        <p className="hero-sub">Formación integral para líderes, emprendedores y educadores en América Latina con propósito eterno.</p>
        <p className="hero-q">Cuatro caminos, un propósito</p>
        <div className="path-sel">
          {paths.map((p) => (
            <Link key={p.cls} href={p.href} className={`path-card ${p.cls}`}>
              <div className="path-ico"><img src={p.ico} alt={p.label} style={{ width: 48, height: 48, borderRadius: 10 }} /></div>
              <div className="path-lbl">{p.label}</div>
              <div className="path-ttl">{p.title}</div>
              <div className="path-dsc">{p.desc}</div>
              <div className="path-arr">Explorar →</div>
            </Link>
          ))}
        </div>
        <div className="scroll-cue">
          <span>Descubre más</span>
          <div className="scroll-dot" />
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        {stats.map((s, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <div className="stat">
              <span className="stat-n">{s.n}</span>
              <span className="stat-l">{s.l}</span>
            </div>
            {i < stats.length - 1 && <div className="stat-div" />}
          </span>
        ))}
      </div>

      {/* UDIER Teaser */}
      <section className="udier-wrap">
        <div className="udier-grid">
          <div className="rev">
            <span className="sec-tag">Metodología</span>
            <h2 className="sec-h">La ruta UDIER</h2>
            <p className="sec-sub">Nuestro framework pedagógico guía cada experiencia de aprendizaje a través de cinco fases diseñadas para transformar conocimiento en acción.</p>
            <div className="udier-pills">
              {udierSteps.map((s) => (
                <span key={s.letter} className="u-pill"><span className="u-dot" />{s.name}</span>
              ))}
            </div>
            <Link href="/nosotros" className="btn-dark">Conoce la metodología →</Link>
          </div>
          <div className="udier-box rev">
            <div className="udier-box-ttl">Framework UDIER</div>
            {udierSteps.map((s) => (
              <div key={s.letter} className="u-step">
                <div className="u-letter">{s.letter}</div>
                <div>
                  <h5>{s.name}</h5>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testi-home">
        <div className="testi-inner">
          <div className="rev">
            <span className="sec-tag">Testimonios</span>
            <h2 className="sec-h">Lo que dicen nuestros socios</h2>
          </div>
          {cmsTestimonials.length > 0 ? (
            <TestimonialCarousel testimonials={cmsTestimonials.slice(0, 9)} urlFor={urlFor} />
          ) : (
            <div className="testi-grid-3">
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta rev">
        <h2>Comienza tu camino de <span>aprendizaje</span></h2>
        <p>Únete a más de 500 socios de aprendizaje que ya están transformando sus vidas y comunidades.</p>
        <div className="cta-btns">
          <Link href="/cursos" className="btn-primary">Explorar cursos →</Link>
          <Link href="/contacto" className="btn-ghost">Contáctanos</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
