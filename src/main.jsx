import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import StartPage from './StartPage.jsx';
import AboutPage from './AboutPage.jsx';
import ProductPage from './ProductPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <StartPage /> },
      { path: '/about-us', element: <AboutPage /> },
      { path: '/products', element: <ProductPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
