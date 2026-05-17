import './index.css';
import TopBar        from './components/TopBar';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About         from './components/About';
import Programs      from './components/Programs';
import NewsEvents    from './components/NewsEvents';
import Testimonials  from './components/Testimonials';
import CTA           from './components/CTA';
import Footer        from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#050c1a' }}>
      <TopBar />
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <About />
      <Programs />
      <NewsEvents />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
