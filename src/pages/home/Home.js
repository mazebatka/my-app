import React from "react";
import { Footer, Header, ProductList } from "../../components";
import { deviceData } from "../../data";

export const Home = () => {
  return (
    <div>
      <Header />
      <ProductList products={deviceData} />
      <Footer />
    </div>
  );
};
