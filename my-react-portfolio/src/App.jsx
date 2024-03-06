import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Suspense fallback={<div className="synthwave-background">Loading...</div>}>
      <HashRouter>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          ))}
        </Routes>
        <Footer />
      </HashRouter>
    </Suspense>
  );
}

export default App;
