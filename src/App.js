import React from 'react';
import {Switch,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Category from './Pages/Category/Category';
import Product from './Pages/Product/Product';
import Auth from './Pages/Auth/Auth';
import Profile from './Pages/Profile/Profile';
import Checkout from './Pages/Checkout/Checkout';


function App() {
  return (
    <div >
<Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/shop" exact component={Shop}/>
  <Route path="/shop/category/:categoryName" exact component={Category}/>
  <Route path="/shop/category/:categoryName/product/:productId" component={Product}/>
  <Route path="/auth" component={Auth}/>
  <Route path="/checkout" component={Checkout}/>
  <Route path="/manageprofile" component={Profile}/>
    
</Switch>
    </div>
  );
}

export default App;
 