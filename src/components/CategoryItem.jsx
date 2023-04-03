import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'
import {Link} from 'react-router-dom'


const Container = styled.div`
flex:1;
margin:15px;
height: 55vh;
width:90vw;
position:relative;
background:white;
box-shadow:0px 5px 10px 0px #0000001d;

${mobile({
  margin:"1rem 0rem",
  width:"100vw",
  borderBottom:"solid 1px grey"
})}
`
const ImageContainer = styled.div`
overflow:hidden;
height:70%;
`

const Image = styled.img`
width:100%;
height: 100%;
object-fit:cover;
overflow:hidden;
transition:.5s;
&:hover{
  transform: scale(1.2)
}
${mobile({
})}
`
const DetailContainer = styled.div`
padding-left:15px;
padding-right:15px;
${mobile({
  border:"solid 2px black",
  padding:"10px",
})}
`

const ProductName = styled.h2`
color:black;
font-weight: 600;
font-size: 30px;
padding:10px;
text-align:center;
${mobile({
  fontSize:"18px",
  textAlign:"center"
})}
`
const Button = styled.button`
border:none;
border-radius:10px;
padding:15px;
width:100%;
background:#6f2bdd;
color:white;
font-size:16px;
font-weight:600;
transition:.3s;
cursor:pointer;
&:hover{
  background:white;
  color:#04241a;
}

${mobile({
  padding:"10px"
})}
`

export const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <ImageContainer>
      <Image src={item.img}/>
      </ImageContainer>
      <DetailContainer>
      <ProductName>{item.title}</ProductName>
      <Button >SHOP NOW</Button>
      </DetailContainer>
      </Link>
    </Container>
  )
}

export default CategoryItem