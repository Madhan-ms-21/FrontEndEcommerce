// import {useEffect , useState} from 'react'
import { useCartContext } from '../context/Cart';
import useApi from '../hooks/useApi';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({selectedCategory,setSelectedCategory}) =>{

    // const [categories,setCategories] = useState([]);

    // const categories = ["electronics" , 'jewelery' , 'mens clothing' , 'womens clothing']

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/categories`)
    //         .then((res) => res.json())
    //         .then((json) => {
    //         setCategories(json);
    //         // console.log(json);
    //         });
    // }, []);

    const {data , loading , loadError} = useApi('https://fakestoreapi.com/products/categories')
    console.log()

    const {cart} = useCartContext();

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