import { useThrowError } from "../../hooks/useThrowError";

const Reccomendations = () => {
  useThrowError();

  return <div className="product-card">
    <div className="product-image"></div>
    <div className="product-title"></div>
    <div className="product-description"></div>
    <div className="product-price"></div>
  </div>;
};

export default Reccomendations;
