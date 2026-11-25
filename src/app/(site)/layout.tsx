import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollReveal />
    </>
  );
}
