import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainMenu from './MainMenu';
import Footer from './Footer';

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setProducts(await (await fetch('/api/products')).json());
    })();
  }, []);

  return <>
    <header>
      <MainMenu />
    </header>
    <main className="container mt-5">
      <Outlet context={{ products }} />
    </main>
    <footer className="container-fluid mt-4">
      <Footer />
    </footer>
  </>
}