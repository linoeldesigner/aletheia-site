'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

const tabs = [
  { label: 'Blog', href: '/recursos/blog' },
  { label: 'Boletines', href: '/recursos/boletines' },
  { label: 'Librería Virtual', href: '/recursos/libreria' },
  { label: 'Descargables', href: '/recursos/descargables' },
];

export default function RecursosLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <h1>Recursos</h1>
          <p>Artículos, boletines, libros y herramientas para tu crecimiento integral.</p>
        </div>
      </div>

      <div className="pg-content">
        <div className="rec-tabs">
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className={`rec-tab${pathname === t.href ? ' on' : ''}`}
            >
              {t.label}
            </Link>
          ))}
        </div>
        {children}
      </div>

      <Footer condensed />
    </>
  );
}
