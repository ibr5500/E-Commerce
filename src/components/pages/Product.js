import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/productSlice';

const Product = () => {
  const dataList = useSelector((state) => state.products.data);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchProducts());
  }, [dispach]);

  return (
    <div>
      {dataList
        && dataList.map((p) => (
          <div key={p.id}>
            <img
              src={p.image}
              alt={p.title}
            />
            <h2>{p.title}</h2>
            <p>{p.price}</p>
            <p>{p.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Product;
