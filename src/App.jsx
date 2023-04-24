// import './App.css';
import {Home} from './pages/Home';
import {ProductList} from './pages/ProductList'
import {Product} from './pages/Product'
import { Signup } from './pages/Signup';
import {Signin} from './pages/Signin';
import {Cart} from './pages/Cart';
import {success} from './pages/success'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Container = styled.div`
`
const App=()=> {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/cart" element={<success/>} />
        <Route path="/success" element={<Cart/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App