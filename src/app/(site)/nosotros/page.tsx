import Link from 'next/link';
import Footer from '@/components/Footer';

const udierFull = [
  { letter: 'U', name: 'Ubícate', desc: 'Conoce dónde estás y define el punto de partida de tu formación.' },
  { letter: 'D', name: 'Descubre', desc: 'Explora contenidos, herramientas y conexiones que amplían tu visión.' },
  { letter: 'I', name: 'Identifica', desc: 'Organiza los elementos y pasos que darán forma a tu ruta de aprendizaje.' },
  { letter: 'E', name: 'Evalúa', desc: 'Mide tu progreso con indicadores claros y retroalimentación continua.' },
  { letter: 'R', name: 'Replica', desc: 'Comparte lo aprendido y multiplica el impacto en tu comunidad.' },
];

const team = [
  { name: 'José Ramón Alvarez', role: 'Director General', img: '/images/team-member-1.webp', creds: ['MBA en Administración de Empresas', 'Máster en Liderazgo Cristiano', '20+ años en educación cristiana'] },
  { name: 'Mariela Luna de Alvarez', role: 'Directora Académica', img: '/images/team-member-2.webp', creds: ['Doctora en Educación', 'Especialista en Pedagogía', 'Autora de múltiples publicaciones'] },
  { name: 'Juan Carlos Infante', role: 'Director de Tecnología', img: '/images/team-member-3.webp', creds: ['Ingeniero en Sistemas', 'Especialista en EdTech', 'Desarrollador de plataformas educativas'] },
  { name: 'Hedemarrie Dussan', role: 'Coordinadora de Comunidad', img: '/images/about-hero.webp', creds: ['Licenciada en Comunicación Social', 'Community Manager certificada', 'Gestora de redes educativas'] },
];

const diffs = [
  { ico: '🎯', title: 'Enfoque integral', desc: 'Combinamos formación espiritual, académica y práctica en cada programa.' },
  { ico: '🌐', title: 'Alcance global', desc: 'Estudiantes en más de 10 países de América Latina y el mundo hispanohablante.' },
  { ico: '📐', title: 'Metodología UDIER', desc: 'Un framework pedagógico probado que transforma conocimiento en acción.' },
  { ico: '🤝', title: 'Comunidad activa', desc: 'Red de socios de aprendizaje que se apoyan y crecen juntos.' },
  { ico: '💡', title: 'Innovación constante', desc: 'Herramientas digitales y métodos contemporáneos al servicio de la formación.' },
  { ico: '❤️', title: 'Propósito eterno', desc: 'Todo lo que hacemos está fundamentado en principios bíblicos y valores cristianos.' },
];

export default function NosotrosPage() {
  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <h1>Nosotros</h1>
          <p>Conoce la visión, el equipo y la metodología detrás de Alétheia.</p>
        </div>
      </div>

      <div className="pg-content">
        {/* Mission */}
        <div className="nosotros-grid rev">
          <div className="nosotros-img">
            <img src="/images/about-hero.webp" alt="Equipo Alétheia" />
          </div>
          <div>
            <span className="sec-tag">Nuestra misión</span>
            <h2 className="sec-h">Formación que transforma</h2>
            <p className="sec-sub" style={{ marginBottom: 24 }}>Alétheia es una red de aprendizaje cristiana dedicada a la formación integral de líderes, emprendedores y educadores en América Latina.</p>
            <div className="mission-block">
              &ldquo;Creemos que la educación con propósito eterno tiene el poder de transformar personas, familias y comunidades enteras. Nuestro compromiso es hacer accesible una formación de excelencia que integre fe, conocimiento y acción.&rdquo;
            </div>
          </div>
        </div>

        {/* UDIER Full */}
        <div className="udier-full-wrap rev">
          <span className="sec-tag">Metodología</span>
          <h2 className="sec-h">El framework UDIER</h2>
          <p className="sec-sub">Cinco fases diseñadas para transformar conocimiento en acción con propósito.</p>
          <div className="udier-full-grid">
            {udierFull.map((s) => (
              <div key={s.letter} className="u-big-card">
                <div className="u-big-letter">{s.letter}</div>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="team-section">
          <div className="rev">
            <span className="sec-tag">Equipo</span>
            <h2 className="sec-h">Nuestro equipo</h2>
            <p className="sec-sub">Profesionales comprometidos con la excelencia educativa y el servicio cristiano.</p>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-card rev">
                <div className="team-photo">
                  <img src={m.img} alt={m.name} />
                </div>
                <div className="team-info">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role-tag">● {m.role}</div>
                  <div className="team-creds">
                    {m.creds.map((c, i) => (
                      <div key={i} className="team-cred">{c}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="rev">
          <span className="sec-tag">¿Por qué Alétheia?</span>
          <h2 className="sec-h">Lo que nos diferencia</h2>
        </div>
        <div className="diff-grid" style={{ marginBottom: 80 }}>
          {diffs.map((d) => (
            <div key={d.title} className="diff-card rev">
              <div className="diff-ico">{d.ico}</div>
              <h4>{d.title}</h4>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="home-cta rev" style={{ margin: '0 0 0' }}>
          <h2>Únete a nuestra <span>comunidad</span></h2>
          <p>Forma parte de una red de aprendizaje que está transformando América Latina.</p>
          <div className="cta-btns">
            <Link href="/cursos" className="btn-primary">Ver cursos →</Link>
            <Link href="/contacto" className="btn-ghost">Contáctanos</Link>
          </div>
        </section>
      </div>

      <Footer condensed />
    </>
  );
}
