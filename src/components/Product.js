const Product = ({product})=>{

    return <div className = 'product' key = {product.id}> 
        <img src = {product.image} alt = "product image" className='image'/>
        <div className="title"> {product.title} </div>
        <span>$ {product.price} </span>
    </div>
}

export default Product