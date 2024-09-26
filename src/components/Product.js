import { useNavigate } from "react-router-dom"


const Product = ({product})=>{

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product.id}`)
    }

    return (
    <div onClick={handleClick}
        className = 'product' key = {product.id}> 
        <img src = {product.image} alt = "product image" className='image'/>
        <div className="title"> {product.title} </div>
        <span>$ {product.price} </span>
    </div>)
}

export default Product