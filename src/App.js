
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import ProductShow from './components/ProductShow';

function App() {
  const [selectedCategory,setSelectedCategory] = useState("electronics");
  return (
    
    <div className="App">
        <Header 
          selectedCategory={selectedCategory} 
          setSelectedCategory = {setSelectedCategory}/>
        <Routes>
          <Route
              path="/"
                  element={[
                    <ProductList defaultselectedCategory = {selectedCategory}/>
              ]}>
          </Route>
          <Route path='/categories/:category' 
                  element = {<ProductList defaultselectedCategory = {selectedCategory}/>} />

          
          <Route path='/products/:productId' element = {<ProductShow/>} />
          <Route path="*" element = {<NotFound />} />

        </Routes>

    </div>
    
  );
}

export default App;
