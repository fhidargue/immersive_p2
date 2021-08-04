import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product-service";
import InventoryContext from "../../store/Inventory/InventoryContext";

const ProductPage = () => {
  const { productUrl } = useParams();
  const { product, setProduct } = useContext(InventoryContext);
  console.log("productUrl: ", productUrl);

  useEffect(() => {
    getProduct(productUrl).then((productResponse) => {
      setProduct(productResponse);
    });
  }, [setProduct, productUrl]);

  console.log("product: ", product);

  return product && <div>{product.name}</div>;
};

export default ProductPage;
