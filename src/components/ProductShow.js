import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import AddToCart from "./AddtoCart";



const ProductShow = () => {
  const { productId } = useParams();
  const { data } = useApi(`https://fakestoreapi.com/products/${productId}`);
  console.log("product in Product show" , data)
  return (
    <div className="product-show" key={data.id}>
      <img src={data.image} alt={data.title} className="imgage" />
      <div className="product-show-description">
        <div className="product-show-title">{data.title}</div>
        <div className="product-body product-show-body">
          <div className="product-show-price">$ {data.price}</div>
          <AddToCart product={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
