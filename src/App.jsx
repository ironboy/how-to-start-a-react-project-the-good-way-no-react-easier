import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import MainMenu from './MainMenu';
import Footer from './Footer';
import { useGet } from './hooksAndUtils/useFetch';

export default function App() {

  const [products, setProducts] = useState([]);
  useGet('/api/products', setProducts);

  return <>
    <header>
      <MainMenu />
    </header>
    <main className="container mt-5">
      <button className="btn btn-primary" onClick={() => useGet('/api/people', setPeople)}>Fetch again</button>
      <Outlet context={{ products }} />
    </main>
    <footer className="container-fluid mt-4">
      <Footer />
    </footer>
  </>
}