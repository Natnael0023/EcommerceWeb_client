import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Product} from './Product'
// import {products} from '../data'
import {mobile} from '../Responsive'
import axios from 'axios'


export const Products = ({cat,filter,sort}) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category:${cat}`:`http://localhost:5000/api/products` )
        setProducts(res.data)
      }catch(err){}
    }

    getProducts()
  },[cat])

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filter).every(([key,value])=>item[key].includes(value)))
    )
  },[products,cat,filter])

  useEffect(()=>{
    if(sort="newest"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      )
    }
    else if(sort="asc"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=> a.price - b.price)
      )
    }
    else {
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=> b.price - a.price)
      )
    }
  },[products,cat,sort])

  return (
    <Container>
        {cat ? filteredProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        )): products.slice(0,8).map((item)=>(
          <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}




const Container = styled.div`
width: 85vw;
margin:auto;
padding:10px;
display:flex;
flex-direction: row;
flex-wrap:wrap;
justify-content: space-between;

${mobile({
  flexDirection:"column"  
})}
`

const CategoryName = styled.div`
`