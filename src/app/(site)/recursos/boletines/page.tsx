import { getNewsletters } from '@/lib/sanity';

const fallbackEditions = [
  { _id: '1', title: 'Mujeres sin Fronteras', edition: 'Edición 5 — Noviembre 2024', externalUrl: '#' },
  { _id: '2', title: 'Mujeres sin Fronteras', edition: 'Edición 4 — Septiembre 2024', externalUrl: '#' },
  { _id: '3', title: 'Mujeres sin Fronteras', edition: 'Edición 3 — Julio 2024', externalUrl: '#' },
  { _id: '4', title: 'Mujeres sin Fronteras', edition: 'Edición 2 — Mayo 2024', externalUrl: '#' },
  { _id: '5', title: 'Mujeres sin Fronteras', edition: 'Edición 1 — Marzo 2024', externalUrl: '#' },
];

export const revalidate = 60;

export default async function BoletinesPage() {
  const cmsNewsletters = await getNewsletters();
  const editions = cmsNewsletters.length > 0 ? cmsNewsletters : fallbackEditions;

  return (
    <div>
      <div className="rev" style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)', marginBottom: 6 }}>Mujeres sin Fronteras</h3>
        <p style={{ fontSize: 14, color: 'var(--muted)' }}>Nuestro boletín mensual con reflexiones, testimonios y recursos para mujeres emprendedoras.</p>
      </div>
      <div className="boletines-list">
        {editions.map((e: any) => (
          <a key={e._id} href={e.fileUrl || e.externalUrl || '#'} className="bol-item rev" target="_blank" rel="noopener noreferrer">
            <div className="bol-ico">📄</div>
            <div className="bol-info">
              <div className="bol-title">{e.title}</div>
              <div className="bol-date">{e.edition}</div>
            </div>
            <span className="bol-arr">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
