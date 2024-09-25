
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState } from "react";

function App() {
  const [selectedCategory,setSelectedCategory] = useState('');
  return (
    <div className="App">
        <Header 
        selectedCategory={selectedCategory} 
        setSelectedCategory = {setSelectedCategory}
        />
        <ProductList selectedCategory = {selectedCategory}/>
    </div>
  );
}

export default App;
