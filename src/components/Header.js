// import {useEffect , useState} from 'react'
import { useCartContext } from '../context/Cart';
import useApi from '../hooks/useApi';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { setSelectedCategory } from '../store/header';
import { useDispatch } from 'react-redux';
const Header = () =>{

    // const categories = ["electronics" , 'jewelery' , 'mens clothing' , 'womens clothing']

    // const [categories,setCategories] = useState([]);

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/categories`)
    //         .then((res) => res.json())
    //         .then((json) => {
    //         setCategories(json);
    //         // console.log(json);
    //         });
    // }, []);

    const {data , loading , loadError} = useApi('https://fakestoreapi.com/products/categories')

    const {selectedCategory} = useSelector( (state) => state.header)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    // const {cart} = useCartContext();
    
    console.log('cart value from redux' , cart)

    const totalItems = () => {
      let total = 0;
      for(let item in cart){
        total += cart[item].quantity
      }
      return total;
    };
    

    if(loading) return <div className='loading'> Fetching Categories..</div>
    else if(loadError) return <div> oops try.. agin</div>
    else
    return (
        <div className="header-items">
        {data.map((catgeory) => (
          <Link
            to={`categories/${catgeory}`}
            className={
              "header-item " +
              (catgeory === selectedCategory ? "header-item-selected" : "")
            }
            onClick={() => setSelectedCategory(catgeory)}
            key={catgeory}
          >
            {catgeory}
          </Link>
        ))}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-length">{totalItems()}</span>
      </div>)

}

export default Header;