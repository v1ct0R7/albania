import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.14),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.08),_transparent_20%),linear-gradient(180deg,_#f7efe1,_#ffffff)] text-charcoal-900 selection:bg-red-600 selection:text-white">
      <Header />
      <main className="pt-24">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
