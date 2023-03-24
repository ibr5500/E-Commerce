import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/productSlice';

const Product = () => {
  const dataList = useSelector((state) => state.products.data);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchProducts());
  }, [dispach]);
  return <div>{dataList && dataList.map((p) => <h2 key={p.id}>{p.title}</h2>)}</div>;
};

export default Product;
