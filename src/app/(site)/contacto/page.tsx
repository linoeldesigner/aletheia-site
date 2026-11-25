'use client';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. Escríbenos y te responderemos pronto.</p>
        </div>
      </div>

      <div className="pg-content">
        <div className="contacto-grid">
          {/* Form */}
          <div className="cform-wrap rev">
            <h3>Envíanos un mensaje</h3>
            <p className="sub">Completa el formulario y nos pondremos en contacto contigo.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="fg-row">
                <div className="fg"><label>Nombre</label><input type="text" placeholder="Tu nombre" /></div>
                <div className="fg"><label>Apellido</label><input type="text" placeholder="Tu apellido" /></div>
              </div>
              <div className="fg-row">
                <div className="fg"><label>Email</label><input type="email" placeholder="tu@email.com" /></div>
                <div className="fg"><label>Teléfono</label><input type="tel" placeholder="+1 (555) 000-0000" /></div>
              </div>
              <div className="fg">
                <label>Área de interés</label>
                <select defaultValue="">
                  <option value="" disabled>Selecciona un área</option>
                  <option>ALÉ EMPRENDIMIENTOS</option>
                  <option>ALÉ TEOLOGÍA</option>
                  <option>ALÉ EDUCACIÓN</option>
                  <option>ALÉ PERSONAL</option>
                  <option>Consultoría</option>
                  <option>Alianza institucional</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="fg"><label>Mensaje</label><textarea placeholder="¿En qué podemos ayudarte?" /></div>
              <button className="sub-btn" type="submit">Enviar mensaje →</button>
            </form>
          </div>

          {/* Sidebar */}
          <div>
            {/* Donation */}
            <div className="don-card rev">
              <h3>Apoya nuestra misión</h3>
              <p>Tu donación nos ayuda a llevar educación cristiana de calidad a más personas en América Latina.</p>
              <div className="don-amts">
                <button className="don-amt on">$4.99</button>
                <button className="don-amt">$9.99</button>
                <button className="don-amt">$19.99</button>
                <button className="don-amt">Otro</button>
              </div>
              <button className="don-btn">Donar ahora →</button>
            </div>

            {/* Social */}
            <div className="social-list rev">
              <a href="https://www.youtube.com/@aletheiareddeemprendimiento" target="_blank" rel="noopener noreferrer" className="soc-link">
                <div className="soc-ico" style={{ background: '#FEE2E2', color: '#DC2626' }}>▶</div>
                <div>
                  <div className="soc-lbl">YouTube</div>
                  <div className="soc-handle">@aletheiareddeemprendimiento</div>
                </div>
              </a>
              <a href="https://aletheialared.com" target="_blank" rel="noopener noreferrer" className="soc-link">
                <div className="soc-ico" style={{ background: 'rgba(3,170,240,.1)', color: 'var(--brand)' }}>🌐</div>
                <div>
                  <div className="soc-lbl">Sitio Web</div>
                  <div className="soc-handle">aletheialared.com</div>
                </div>
              </a>
            </div>

            {/* FAQ */}
            <div className="rev" style={{ marginTop: 20 }}>
              <h4 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 16 }}>Preguntas frecuentes</h4>
              <details style={{ marginBottom: 12, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 20px' }}>
                <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--dark)', cursor: 'pointer' }}>¿Cómo me inscribo en un curso?</summary>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 10, lineHeight: 1.65 }}>Selecciona el curso de tu interés en nuestra sección de Cursos y haz clic en &ldquo;Inscribirme&rdquo;. Recibirás un correo de confirmación con los detalles de acceso.</p>
              </details>
              <details style={{ marginBottom: 12, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 20px' }}>
                <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--dark)', cursor: 'pointer' }}>¿Los cursos tienen certificación?</summary>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 10, lineHeight: 1.65 }}>Sí, al completar un curso recibirás un certificado digital emitido por CACVA que acredita tu formación.</p>
              </details>
              <details style={{ marginBottom: 12, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 20px' }}>
                <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--dark)', cursor: 'pointer' }}>¿Puedo tomar cursos desde cualquier país?</summary>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 10, lineHeight: 1.65 }}>¡Por supuesto! Todos nuestros cursos son 100% en línea y accesibles desde cualquier lugar del mundo con conexión a internet.</p>
              </details>
            </div>
          </div>
        </div>
      </div>

      <Footer condensed />
    </>
  );
}
