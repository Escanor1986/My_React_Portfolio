import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
        <div>
          <nav>
            {/* Liens de navigation */}
            <ul>
              <li>
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/about">About</a>
              </li>
              {/*autres liens de navigation ici */}
            </ul>
          </nav>

          {/* Définition des routes */}
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} />
            {/* autres routes ici */}
          </Routes>
        </div>
      </HashRouter>
    </Suspense>
  );
}

export default App;
