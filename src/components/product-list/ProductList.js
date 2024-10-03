import { ProductCard } from "../product-card";
import "./ProductList.css";
import { useThemeContext } from "../../context";

export const ProductList = (props) => {
  const { products } = props;
  const { theme } = useThemeContext();
  if (products.length === 0) return <h2>No products available</h2>;
  return (
    <div
      id="product-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
