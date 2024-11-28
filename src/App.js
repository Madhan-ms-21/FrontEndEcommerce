
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import ProductShow from './components/ProductShow';
import {Provider} from 'react-redux'
import CartContextProvider from './context/Cart';
import store from './store';


function App() {
  const [selectedCategory,setSelectedCategory] = useState("electronics");


  return (
    
    <div className="App">
      <Provider store={store}>
        <CartContextProvider>
          {/* <Header 
            selectedCategory={selectedCategory} 
            setSelectedCategory = {setSelectedCategory}/> */}
          <Routes>
            <Route
              path="/"
              element={[
                <Header
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />,
                <ProductList />
              ]}>
              
              <Route path='/categories/:category' 
                      element = {[
                        <ProductList defaultselectedCategory = {selectedCategory}/>]} />

              
              <Route path='/products/:productId' element = {<ProductShow/>} />
              <Route path="*" element = {<NotFound />} />
            </Route>
          </Routes>
          </CartContextProvider>
        </Provider>
    </div>
    
  );
}

export default App;
