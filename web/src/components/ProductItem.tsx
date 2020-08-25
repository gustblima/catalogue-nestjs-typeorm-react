import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IProduct } from '../types';

type ProductItemProps = {
  product: IProduct
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <Row className="">
      <Col xs={3}>
      {
        product.photos.slice(0, 3).map(p => <img src={p.path || 'https://dgn7v532p0g5j.cloudfront.net/unsafe/380x380/filters:format(webp):quality(95)/products/photos/semi-environment/bundle_019-1595608349142.jpg'}></img>)
      }
      </Col>
      <Col xs={6}>
        <p>{product.variants.pop()?.category.name}</p>
        <p>Classic</p>
      </Col>
      <Col xs={3}>
        R$298,00;
      </Col>
    </Row>
  );
}
 
export default ProductItem;
