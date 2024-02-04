import { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import LandingPage from './landingPage/LandingPage';
import Features from './features/Features';

const App: FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const openAuthModal = () => {
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation openAuthModal={openAuthModal} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
