import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts,deleteProduct } from './redux/action';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm
        onSubmit={(formData) => {
          dispatch(addProduct(formData));
        }}
      />
      <ProductList
        products={products}
        deleteProduct={(id) => dispatch(deleteProduct(id))}
      />
    </div>
  );
};

export default App;
