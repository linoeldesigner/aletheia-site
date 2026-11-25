'use client';
import { useState } from 'react';
import Footer from '@/components/Footer';

const courses = [
  { title: 'Lanzamiento de Negocios con Propósito', desc: 'Desarrolla tu idea de negocio con fundamentos bíblicos y herramientas prácticas de emprendimiento moderno.', area: 'emprendimientos', price: 'Gratis', isFree: true, duration: '8 semanas', lessons: 12, active: true },
  { title: 'Fundamentos de Teología Bíblica', desc: 'Estudio profundo de las doctrinas esenciales de la fe cristiana con una perspectiva académica y devocional.', area: 'teologia', price: '$29.99', isFree: false, duration: '10 semanas', lessons: 15, active: true },
  { title: 'Liderazgo Transformacional Cristiano', desc: 'Desarrolla las habilidades de liderazgo que necesitas para influir positivamente en tu entorno personal y profesional.', area: 'personal', price: 'Gratis', isFree: true, duration: '6 semanas', lessons: 10, active: true },
  { title: 'Marketing Digital para Ministerios', desc: 'Aprende estrategias digitales efectivas para expandir el alcance de tu ministerio o emprendimiento cristiano.', area: 'emprendimientos', price: '$19.99', isFree: false, duration: '6 semanas', lessons: 8, active: false },
  { title: 'Hermenéutica Avanzada', desc: 'Métodos de interpretación bíblica para una comprensión más profunda y contextualizada de las Escrituras.', area: 'teologia', price: '$34.99', isFree: false, duration: '12 semanas', lessons: 18, active: false },
  { title: 'Pedagogía Cristiana Innovadora', desc: 'Metodologías educativas contemporáneas aplicadas al contexto de la enseñanza cristiana y formación de discípulos.', area: 'educacion', price: '$24.99', isFree: false, duration: '8 semanas', lessons: 12, active: false },
  { title: 'Inteligencia Emocional y Fe', desc: 'Integra los principios de la inteligencia emocional con una cosmovisión cristiana para relaciones más saludables.', area: 'personal', price: 'Gratis', isFree: true, duration: '4 semanas', lessons: 6, active: false },
];

const areaColors: Record<string, { bg: string; dk: string; lt: string; label: string }> = {
  emprendimientos: { bg: 'var(--neg)', dk: 'var(--neg-dk)', lt: 'var(--neg-lt)', label: 'Emprendimientos' },
  teologia: { bg: 'var(--teo)', dk: 'var(--teo-dk)', lt: 'var(--teo-lt)', label: 'Teología' },
  educacion: { bg: 'var(--edu)', dk: 'var(--edu-dk)', lt: 'var(--edu-lt)', label: 'Educación' },
  personal: { bg: 'var(--per)', dk: 'var(--per-dk)', lt: 'var(--per-lt)', label: 'Personal' },
};

const filters = [
  { key: 'all', label: 'Todos', cls: '' },
  { key: 'emprendimientos', label: 'Emprendimientos', cls: 'neg' },
  { key: 'teologia', label: 'Teología', cls: 'teo' },
  { key: 'educacion', label: 'Educación', cls: 'edu' },
  { key: 'personal', label: 'Personal', cls: 'per' },
];

export default function CursosPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? courses : courses.filter((c) => c.area === activeFilter);

  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <h1>Cursos</h1>
          <p>Explora nuestra oferta formativa en cuatro áreas de desarrollo integral.</p>
        </div>
      </div>

      <div className="pg-content">
        <div className="course-filter">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`cf-btn ${f.cls} ${activeFilter === f.key ? 'on' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.cls && <span className="dd-dot" style={{ background: `var(--${f.cls})` }} />}
              {f.label}
            </button>
          ))}
        </div>

        <div className="course-grid">
          {filtered.map((c, i) => {
            const ac = areaColors[c.area];
            if (!c.active) {
              return (
                <div key={i} className="c-card soon rev">
                  <div className="soon-ph">
                    <span className="soon-tag">🔒 Próximamente</span>
                  </div>
                  <div className="c-body">
                    <div className="c-badges" style={{ position: 'relative', marginBottom: 12 }}>
                      <span className="c-area-badge" style={{ background: ac.bg }}>{ac.label}</span>
                    </div>
                    <h3 className="c-title">{c.title}</h3>
                    <p className="c-desc">{c.desc}</p>
                    <div className="c-meta">
                      <span>⏱ {c.duration}</span>
                      <span>📚 {c.lessons} lecciones</span>
                    </div>
                  </div>
                </div>
              );
            }
            const btnCls = c.area === 'emprendimientos' ? 'cb-neg' : c.area === 'teologia' ? 'cb-teo' : c.area === 'educacion' ? 'cb-edu' : 'cb-per';
            return (
              <div key={i} className="c-card rev">
                <div className="c-img">
                  <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${ac.lt}, ${ac.bg}20)` }} />
                  <div className="c-badges">
                    <span className="c-area-badge" style={{ background: ac.bg }}>{ac.label}</span>
                    <span className={`c-price ${c.isFree ? 'p-free' : 'p-paid'}`}>{c.price}</span>
                  </div>
                </div>
                <div className="c-body">
                  <h3 className="c-title">{c.title}</h3>
                  <p className="c-desc">{c.desc}</p>
                  <div className="c-meta">
                    <span>⏱ {c.duration}</span>
                    <span>📚 {c.lessons} lecciones</span>
                  </div>
                  <button className={`c-btn ${btnCls}`}>Inscribirme →</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer condensed />
    </>
  );
}
