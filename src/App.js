import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddProduct from './screens/AddProduct';
import ShowProducts from './screens/ShowProducts';


const App = () => {
  return (
    <div>
      <h1 style = {{marginLeft: "6rem", marginTop: "1rem"}}>This is Ecommerce Webapp</h1>
      <Router>
        <Routes>
          <Route path = '/addProduct' Component={AddProduct}/>
          <Route path = '/Products' Component={ShowProducts} />
        </Routes>
      </Router>
      <AddProduct />
      <ShowProducts />
      
    </div>
  );
}

export default App;
