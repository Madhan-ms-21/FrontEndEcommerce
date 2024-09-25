// import {useEffect , useState} from 'react'
import useApi from '../hooks/useApi';

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

    if(loading) return <div className='loading'> Fetching Categories..</div>
    else if(loadError) return <div> oops try.. agin</div>
    else
    return (
        <div className="header-items">
        {data.map((catgeory) => (
          <div
            className={
              "header-item " +
              (catgeory === selectedCategory ? "header-item-selected" : "")
            }
            onClick={() => setSelectedCategory(catgeory)}
            key={catgeory}
          >
            {catgeory}
          </div>
        ))}
      </div>)

}

export default Header;