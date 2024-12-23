import { useEffect, useState } from "react";
import Product from "./Product";
import useApi from "../hooks/useApi";
import { useParams } from "react-router-dom";
import { loadProducts } from "../store/productList";
import { useDispatch , useSelector} from "react-redux";

import { setSelectedCategory } from "../store/header"
const ProductList = () =>{

    // const productslist = [{
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     }
    // },
    // {
    //     "id": 2,
    //     "title": "Mens Casual Premium Slim Fit T-Shirts ",
    //     "price": 22.3,
    //     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //     "rating": {
    //         "rate": 4.1,
    //         "count": 259
    //     }
    // },
    // {
    //     "id": 3,
    //     "title": "Mens Cotton Jacket",
    //     "price": 55.99,
    //     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //     "rating": {
    //         "rate": 4.7,
    //         "count": 500
    //     }
    // }]

    const {category} = useParams();
    const categoryval = category || 'jewelery'
    // const [products,setProducts] = useState([]);
    // const [loading,setLoading] = useState(false);

    // useEffect(()=>{
    //     setLoading(true);
    //     fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    //         .then(res=>res.json())
    //         .then(json=>{
    //             console.log(json);
    //             setProducts(json);
    //             setLoading(false);
    //     })
    // },[selectedCategory])

    console.log(category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProducts(categoryval));
        dispatch(setSelectedCategory(categoryval));
    }, [categoryval, dispatch]);
    
    const { loading, data, loadError } = useSelector(
        (state) => state.productList
    );

    console.log("data in comp", data);

    // const {data , loading , loadError} = useApi(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    
    // useEffect(()=>{
    //     dispatch(loadProducts(selectedCategory))
    // },[selectedCategory])

    if(loading) return <div className="loading"> Fetching Products...</div>
    return <div className='products'> 
        {data.map((product) => (
            <Product product={product} key = {product.id}/>
        ))}
    </div>

}

export default ProductList;