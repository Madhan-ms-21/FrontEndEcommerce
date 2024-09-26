import { useNavigate } from "react-router-dom"
import AddToCart from "./AddtoCart";


const Product = ({product})=>{

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product.id}`)
    }
    
    return (
    <div onClick={handleClick}
        className = 'product' key = {product.id}> 
        <img src = {product.image} alt = "product-image" className='image'/>
        <div className="product-title"> {product.title} </div>
        <div className="product-body">
            <div>$ {product.price} </div>
            <AddToCart product={product}/>
        </div>
        
    </div>)
}

export default Product