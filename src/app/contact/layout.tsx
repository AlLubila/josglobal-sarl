import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css'

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const container = {
    width: '80%',
    margin:'auto'
  }
  return (
    <>
      <Header />
      <div style={container}>{children}</div>
      <footer> <Footer /></footer>
     
    </>
  );
}