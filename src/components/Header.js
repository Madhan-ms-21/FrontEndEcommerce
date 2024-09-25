import {useEffect , useState} from 'react'

const Header = () =>{

    const [categories,setCategories] = useState([])

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
    <div className = 'header-items'> {
        categories.map((category) => (
            <div className='header-item'> {category} </div>
        ))}
    </div>)

}

export default Header;