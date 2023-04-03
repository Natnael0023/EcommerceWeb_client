import React,{useState} from 'react'
import styled from 'styled-components'
import {Search, Menu} from '@mui/icons-material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import {mobile} from '../Responsive'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export function Navbar ()  {

    const [toggle, setToggle]= useState(false)
    const quantity = useSelector(state=>state.cart.quantity)
    const pr = useSelector(state=>state.cart.product)
    const total = useSelector(state=>state.cart.total)

  return (
   <Container>
      <MenuBar onClick={()=>setToggle(!toggle)}>
            <Menu/>
        </MenuBar>
        <Logo>
            <LogoImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5V8Zc0XBPiB2c-5i5VIt_MQ3lMpUMD5irw&usqp=CAU" />
            <LogoText>factos</LogoText>
        </Logo>

        <SubContainer>
            <SearchContainer>
                <Input placeholder='search...'/>
                <Search/>
            </SearchContainer>
          <MenuContainer>
            <MenuItems setToggle={toggle}>
            <MenuLink href="#">SignUp</MenuLink>
            <MenuLink href="#">SignIn</MenuLink>
            <MenuLink href="#">About Us</MenuLink>
            </MenuItems>
         </MenuContainer>
        <Link to={'/cart'}>
         <CartContainer >
            <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartIcon/>
            </Badge>
         </CartContainer>
        </Link>
        </SubContainer>
        
   </Container>
  )
}


const Container = styled.div`
display:flex;
padding-left: 8rem;
padding-right: 8rem;
justify-content: space-between;
align-items:center;
background:white;
box-shadow:1px 0px 5px 0px #e2e2e2;
height:60px;
position:sticky;
top:0px;
z-index:999;
// background:orange;
${mobile({
    padding:"10px",
    height:"40px",
})}
`
const LogoImage = styled.img`
width:35px;
`
const Logo = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-start;
color: #6f2bdd;
${mobile({
   flex:"2",
   fontSize:"20px",
})}
`
const LogoText = styled.p`
font-size:25px;
shadow: 1px 10px 1px 1px #290e553b;
`
const SubContainer = styled.div`
flex:1;
justify-content:center;
display:flex;
`

const MenuBar = styled.div`
display:none;
cursor:pointer;
${mobile({
    display:"flex",
})}
`
const MenuContainer = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
// background:blue;
${mobile({
    flex:"3",
    position:"absolute",
    top:"120px",
    left:"0",
    width:"100vw",
    textAlign:"left"
})}
`
const MenuItems = styled.div`
display:flex;
justify-content:center;
${mobile({
    flexDirection:"column",
    display:props=>props.setToggle?"flex":"none",
    position:"absolute",
    textAlign:"center",
    width:"100%",
    transition:"1s",
    overflow:"hidden",
    boxShadow:"0 50vh 10px 350px #0000004c"
})}
`
const MenuLink = styled.a`
margin:0px 10px;
text-decoration:none;
color:black;
${mobile({
    borderBottom:"solid 1px #e8e8e8",
    margin:"0",
    width:"100%",
    background:"white",
    padding:"10px"
})}
`
const SearchContainer = styled.div`
flex:1;
display: flex;
align-items:center;
background:#e9eceb;
color:grey;
border-radius:10px;
padding-right:5px;
cursor:pointer;
${mobile({
    flex:"3",
    margin:"0px 10px",
})}
`
const Input = styled.input`
padding:10px;
border:none;
width:80%;
outline:none;
background:#e9eceb;
border-radius:10px;
${mobile({
    fontSize:"16px",
})}
`
const CartContainer = styled.div`
flex:1;
justify-content:flex-end;
// background:yellow;
text-align:center;
cursor:pointer;
${mobile({
    flex:"1",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"right",
    position:"fixed",
    top:"600px",
    left:"280px",
    background:"#002d22ef",
    color:"white",
    height:"20px",
    width:"20px",
    padding:"20px",
    borderRadius:"50%",
    boxShadow:"1px 1px 5px 0px grey"
})}
`
