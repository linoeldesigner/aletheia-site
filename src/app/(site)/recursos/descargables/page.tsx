import { getDownloadables } from '@/lib/sanity';

const fallbackResources = [
  { _id: '1', icon: '🌳', title: 'Guía del Árbol de Vida', description: 'Herramienta visual para mapear las áreas fundamentales de tu desarrollo integral y establecer prioridades.' },
  { _id: '2', icon: '🗺️', title: 'Ruta UDIER — Planificador', description: 'Plantilla descargable para aplicar la metodología UDIER a tu propio proyecto o proceso de aprendizaje.' },
  { _id: '3', icon: '📊', title: 'Plan de Negocio Cristiano', description: 'Modelo de plan de negocios con enfoque en valores cristianos y sostenibilidad para emprendedores.' },
];

export const revalidate = 60;

export default async function DescargablesPage() {
  const cmsDownloadables = await getDownloadables();
  const resources = cmsDownloadables.length > 0 ? cmsDownloadables : fallbackResources;

  return (
    <div className="desc-grid">
      {resources.map((r: any) => (
        <a key={r._id} href={r.fileUrl || r.externalUrl || '#'} className="desc-card rev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div className="desc-ico">{r.icon || '📄'}</div>
          <h4>{r.title}</h4>
          <p>{r.description}</p>
          <span className="desc-lnk">Descargar →</span>
        </a>
      ))}
    </div>
  );
}
