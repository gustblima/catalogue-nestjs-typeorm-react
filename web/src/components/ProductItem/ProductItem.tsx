import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ProductItem.scss';
import { IProduct, IDeal, IProductVariant } from '../../types';

type ProductItemProps = {
  product: IProduct
}

var formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const getPriceWithDiscount = (variant: IProductVariant) => {
  const { price, deals } = variant;
  const { percentageAmount, fixedAmount } = deals.reduce((total, d) => {
    return {
      percentageAmount: d.percentageAmount + total.percentageAmount,
      fixedAmount: d.fixedAmount + total.fixedAmount
    }
  }, {
    percentageAmount: 0,
    fixedAmount: 0
  });
  const oldPrice = price / 100.0;
  const discount = (oldPrice) * percentageAmount / 100.0;
  const finalPrice = oldPrice - discount;
  return {
    discount,
    oldPrice,
    finalPrice,
  }
}
export function ProductItem({ product }: ProductItemProps) {
  const firstVariant = product.variants.shift()
  const amount = firstVariant && getPriceWithDiscount(firstVariant!)
  return (
    (firstVariant ? <Row className='ProductItem'>
      <Col xs={4} className='d-flex flex-wrap'>
      {product.photos.slice(0, 4)
        .map(p =>
          <div key={p.sortOrder} className='ProductItem-Thumbnail' style={{ backgroundImage: `url("${p.path}")`}}>
          </div>
        )}
      </Col>
      <Col xs={6} className='ProductItem-Info'>
        <p className='ProductItem-Info-Name'>{product.name}</p>
        <p className='ProductItem-Info-Category'>{firstVariant?.category.name}</p>
      </Col>
      {amount && <Col className='ProductItem-Price' xs={2}>
        <span className='amount'>{amount.discount > 0 && (<span className='discount pr-1'><span className='discount price'>{formatter.format(amount.oldPrice)}</span> por </span>)} {formatter.format(amount.finalPrice)}</span>
      </Col>}
    </Row> : null)
  );
}
