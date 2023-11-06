import { Row, Col } from 'react-bootstrap';

import { srcSetCalc, sizesCalc }
  from './hooksAndUtils/srcSetAndSizesCalc';

export default function CatsAndDogs() {

  let images = [];
  for (let i = 1; i <= 7; i++) {
    images.push(srcSetCalc('/images/scaled/cats/cat-' + i));
    images.push(srcSetCalc('/images/scaled/dogs/dog-' + i));
  }

  return <Row>
    {images.map((srcSetVal, i) => <Col key={i} xs="12" md="6" lg="4" xl="3">
      <img className="w-100 mb-3"
        src={srcSetVal.split(' ')[0]}
        srcSet={srcSetVal}
        sizes={sizesCalc({ xs: 12, md: 6, lg: 4, xl: 3 })}
      />
    </Col>)}
  </Row>
}