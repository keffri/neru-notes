import React, { FC } from 'react';
import Navigation from './navigation/Navigation';
import LandingPage from './landingPage/LandingPage';

const App: FC = () => {
  return (
    <div className="app">
      <Navigation />
      <LandingPage />
    </div>
  );
};

export default App;
