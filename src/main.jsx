import './sass/main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import StartPage from './StartPage.jsx';
import AboutPage from './AboutPage.jsx';
import ProductPage from './ProductPage.jsx';
import BecomeAMemberPage from './BecomeAMemberPage';

export const pages = [
  { path: '/', label: 'Start', element: <StartPage /> },
  { path: '/about-the-company', label: 'About the company', element: <AboutPage /> },
  { path: '/products', label: 'Our products', element: <ProductPage /> },
  { path: '/become-a-member', label: 'Become a member', element: <BecomeAMemberPage /> }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: pages
  }
]);

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
