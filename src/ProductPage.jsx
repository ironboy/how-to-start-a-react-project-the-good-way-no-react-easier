import { useOutletContext } from 'react-router-dom';

export default function ProductPage() {

  const { products } = useOutletContext();

  return <>
    <h2>Product List</h2>
    {products.map(({ productName, priceSEK, eco, id }) =>
      <p key={id}>
        {productName} {priceSEK} kr {eco ? 'Ecological' : 'Non-ecological'}
      </p>)
    }
  </>;
}