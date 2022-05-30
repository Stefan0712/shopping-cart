import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Products from "./Products";
import ShoppingCart from './ShoppingCart'
import Home from './Home'

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/" element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path='/ShoppingCart' element={<ShoppingCart />} />
            <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;