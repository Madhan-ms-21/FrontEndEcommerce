const Header = () =>{

    const categories = ["electronics" , 'jewelery' , 'mens clothing' , 'womens clothing']
    
    return <div className = 'header-items'> {
        categories.map((category) => (
            <div className='header-item'> {category} </div>
        ))
    }</div>

}

export default Header;