import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';

export function RootApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/console" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
} 