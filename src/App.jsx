import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setProducts(await (await fetch('/products.json')).json());
    })();
  }, []);

  return <>
    <header>
      <h1>I am the header</h1>
      <nav>
        <a href="/">Start page</a>&nbsp;
        <a href="/about-us">About us</a>&nbsp;
        <a href="/products">Our products</a>
      </nav>
    </header>
    <main>
      <Outlet context={{ products }} />
    </main>
    <footer>
      <h2>I am the footer!</h2>
    </footer>
  </>
}