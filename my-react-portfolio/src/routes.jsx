import React, { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const routes = [
  { path: '/', element: <HomePage />, exact: true },
  { path: '/about', element: <AboutPage /> }
];

export default routes;
