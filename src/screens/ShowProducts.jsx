import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get("/api/products/allProducts");

      console.log(data);

      setProducts(data);
    };
    getProductsData();
  }, []);

  return (
    <div>
      <Container className="mt-4 p-2">
        <h1>All The Products </h1>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </Container>
    </div>
  );
};

export default ShowProducts;
