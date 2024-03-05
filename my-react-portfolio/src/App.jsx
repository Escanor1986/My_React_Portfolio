import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
        <div className="synthwave-background">
          <Navbar />
          <div className="">
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
          </div>
          <Footer />
        </div>
      </HashRouter>
    </Suspense>
  );
}

export default App;
