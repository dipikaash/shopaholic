import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import OrderDetails from './components/OrderDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/' element={<ProductList />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orderDetails" element={<OrderDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
