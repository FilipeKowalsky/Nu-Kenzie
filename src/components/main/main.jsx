// Main.jsx
import { useState } from "react";
import { Form } from "./form/form";
import { Finance } from "./list/list";
import { MainStyled } from "./styledMain";

export const Main = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <MainStyled>
      <Form setProducts={setProducts} />
        <Finance products={products} deleteProduct={deleteProduct} />
    </MainStyled>
  );
};
