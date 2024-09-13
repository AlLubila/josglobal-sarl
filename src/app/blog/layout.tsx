import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const container = {
    minHeight: '100vh',
    display: 'flex',
    
  }
  return (
    <>
    <div>
      <Header />
      {children}
      <footer> <Footer /></footer>
      </div>
    </>
  );
}