import {useEffect , useState} from 'react'

const Header = ({selectedCategory,setSelectedCategory}) =>{

    const [categories,setCategories] = useState([]);

    // const categories = ["electronics" , 'jewelery' , 'mens clothing' , 'womens clothing']

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/categories`)
            .then((res) => res.json())
            .then((json) => {
            setCategories(json);
            // console.log(json);
            });
    }, []);
    
    return (
        <div className="header-items">
        {categories.map((catgeory) => (
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