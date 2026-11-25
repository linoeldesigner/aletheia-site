import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alétheia — Red de Aprendizaje Cristiana',
  description: 'Formación integral de líderes, emprendedores y educadores en América Latina. Cursos en emprendimiento, teología, educación y desarrollo personal.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
