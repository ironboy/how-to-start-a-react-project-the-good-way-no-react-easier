import { Row, Col } from 'react-bootstrap';

function srcSetCalc(basePath) {
  //  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  return [250, 500, 1000, 1500, 2000].map(w =>
    `${basePath}-${w}w.jpg ${w}w`).join(', ');
}

export default function CatsAndDogs() {

  let images = [];
  for (let i = 1; i <= 7; i++) {
    images.push(srcSetCalc('/images/scaled/cats/cat-' + i));
    images.push(srcSetCalc('/images/scaled/dogs/dog-' + i));
  }
  return <Row>
    {images.map((path, i) => <Col xs="12" md="6" lg="4" xl="3">
      <img className="w-100 mb-3" srcset={path} />
    </Col>)}
  </Row>
}