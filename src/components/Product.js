const Product = ({product})=>{

    return <div className = 'product' key = {product.id}> 
        <img src = {product.image} alt = "product image" className='image'/>
        <div> {product.title} </div>
    </div>
}

export default Product