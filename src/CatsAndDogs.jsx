import { Row, Col } from 'react-bootstrap';
export default function CatsAndDogs() {
  let images = [];
  for (let i = 1; i <= 7; i++) {
    images.push('/images/scaled/cats/cat-' + i + '-500w.jpg');
    images.push('/images/scaled/dogs/dog-' + i + '-500w.jpg');
  }
  return <Row>
    {images.map((path, i) => <Col xs="12" md="6" lg="4" xl="3">
      <img className="w-100 mb-3" src={path} />
    </Col>)}
  </Row>
}