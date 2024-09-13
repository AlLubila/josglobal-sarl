import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <footer> <Footer /></footer>
     
    </>
  );
}