import React, { useState } from 'react'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar'
import {Banner} from '../components/Banner'
import {Products} from '../components/Products'
import {Footer} from '../components/Footer'
import {NewsLetter} from '../components/NewsLetter'
import {mobile} from '../Responsive'
import { useLocation } from 'react-router-dom'


export const ProductList = () => {

    const location = useLocation()
    const cat = location.pathname.split("/")[2]

    const [filter,setFilter] = useState({})
    const [sort,setSort] = useState('newest')

    const handleFilter = (e)=>{
      const value = e.target.value
      setFilter({
        ...filter,
        [e.target.name]: value,
      })
    }

    const handleSort = (e)=>{
      const value = e.target.value
      setSort(e.target.value)
    }
    console.log(sort)
    
  return (
    <Container>
      <Navbar/>
      <Banner/>
      <h1>{cat}</h1>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>red</Option>
            <Option>yellow</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>white</Option>
            <Option>black</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort: </FilterText>
          <Select name="sort" onChange={handleSort}>
            <Option value="asc">Price asc</Option>
            <Option value="desc">Price desc</Option>
            <Option value="newest">Newest</Option>
            <Option value="oldest">Oldest</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}


const Container = styled.div`
`
const Title = styled.h1`
margin:20px;
`
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
// width:95%;

${mobile({
  width:"100%"
})}
`
const Filter = styled.div`
margin:20px;
`
const FilterText = styled.span`
font-size:20px;
display:none;
${mobile({
  display:"none"
})}
`
const Select = styled.select`
padding:10px;
margin-right:10px;
background-color:white;
border:solid 3px #04241a;
border-radius:2px;
&:hover{
background:#04241a;
color:white;
}
${mobile({
  padding:"5px",
  border:"solid 2px #04241a",
})}
`
const Option = styled.option`
`