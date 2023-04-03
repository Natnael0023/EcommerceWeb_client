import React,{ useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar'
import {Banner} from '../components/Banner'
import {Footer} from '../components/Footer'
import {NewsLetter} from '../components/NewsLetter'
import {Add, Remove} from '@mui/icons-material'
import {mobile} from '../Responsive'
import { publicRequest } from '../requestMethod'
import { useDispatch } from 'react-redux'
import {addProduct} from '../cartRedux'


export const Product = () => {

  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [product,setProduct] = useState([])
  const [quantity,setQuantity] = useState(1)
  const [color, setColor] = useState()
  const [size, setSize] = useState()
  const dispatch = useDispatch()

  useEffect( ()=>{
    async function fetchData (){
      try{
        const res = await publicRequest.get(`/products/find/${id}`)
        setProduct(res.data)
      }catch(err){}
    }
    fetchData()
  },[])

  const handleQuantity = (type) =>{
    if(type==='dec' && quantity>1){
      setQuantity(quantity-1)
    }
    else if(type==='inc' && quantity<5){
      setQuantity(quantity+1)
    }
  }

  const handleAddToCart = ()=>{
    // console.log("color: ",color)
    // console.log("size: ",size)
    // console.log("quantity: ",quantity)  

    dispatch(addProduct({
      ...product,
      quantity,
      color,
      size
    }))
  }  

  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://img.freepik.com/premium-psd/close-up-embroidery-logo-hoodie-mockup-isolated_185216-394.jpg"/>
            </ImageContainer>
            <Info>
                <Title>{product.name}</Title>
                <Desc>{product.desc}</Desc>
                <Price>ETB {product.price}</Price>
              <FilterContainer>
                <Filter>
                    <FilterTitle>Color : </FilterTitle>
                    <FilterColorContainer>
                      {product.color?.map((color)=>(
                      <FilterColor color={color} key={color} onClick={()=>setColor(color)}/>
                      ))}
                    </FilterColorContainer>
                </Filter>
                <Filter>
                    <FilterTitle>Size :</FilterTitle>
                    <FilterSize onChange={(e)=>setSize(e.target.value)}>
                      {product.size?.map((size)=>(
                      <FilterSizeOption key={size}>{size}</FilterSizeOption>
                      ))}
                    </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                    <Remove onClick={()=>handleQuantity('dec')}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity('inc')}/>
                </AmountContainer>
                <AddToCart onClick={()=>handleAddToCart()}>
                    Add to cart
                </AddToCart>
              </AddContainer>
            </Info>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

const Container = styled.div`
`

const Wrapper = styled.div`
display:flex;
padding:30px;
${mobile({
flexDirection:"column",
padding:"0"
})}
`
const ImageContainer = styled.div`
flex:3;
width:100%;

${mobile({

})}
`
const Image = styled.img`
width:100%;
${mobile({
})}
`
const Info = styled.div`
flex:2;
margin:0px 20px;
${mobile({
  textAlign:"center"
  })}
`
const Title = styled.h1`
font-weight:400
`
const Price = styled.span`
font-size:25px;
`
const Desc = styled.p`
width:100%;
margin: 10px 0px;
line-height:30px;

${mobile({

})}
`
const FilterContainer = styled.div`
width:50%;
display:flex;
justify-content:space-between;
margin:20px 0px;
// background:red;
${mobile({
  flexDirection:"column",
  width:"100%"
  })}
`
const Filter = styled.div`
display:flex;
align-items:center;
// background:orange;
${mobile({
  margin:"20px 0px",
  justifyContent:"space-between",
  })}
`
const FilterTitle = styled.span`
font-size:20px;
`
const FilterColorContainer = styled.div`
display:flex;
`
const FilterColor = styled.div`
width:30px;
height:30px;
margin:2px;
border:solid 2px ;
border-radius:100%;
background:${props=>props.color};
opacity:.8;
&:hover{
  opacity:1;
}

${localStorage.setItem("border","solid 2px green")};
&:active{
  border:${localStorage.getItem("border")};
}

`
const FilterSize = styled.select`
padding:5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
${mobile({
  width:"100%",
  flexDirection:"column",
  justifyContent:"center"
})}
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
${mobile({
  margin:"10px 0px",
})}
`
const Amount = styled.span`
width:30px;
height:30px;
border: 1px solid grey;
display:flex;
align-items:center;
justify-content:center;
border-radius:2px;
${mobile({
  margin:"0px 20px"
})}
`
const AddToCart = styled.button`
cursor:pointer;
padding:10px;
background:#04241a;
border:1px solid black;
border-radius:2px;
color:white;

&:hover{
    background:white;
    color:#04241a;
}
`
