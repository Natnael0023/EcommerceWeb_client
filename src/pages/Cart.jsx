import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar'
import {Banner} from '../components/Banner'
import {Products} from '../components/Products'
import {Footer} from '../components/Footer'
import {NewsLetter} from '../components/NewsLetter'
import {Add, Remove} from '@mui/icons-material'
import {mobile} from '../Responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethod'
// import { useHistory } from "react-router-dom";

// const KEY = process.env.STRIPE_KEY

export const Cart = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async ()=>{
            try{
                const res = await userRequest("/checkout/payment", {
                    tokenId : stripeToken, 
                    amount: cart.total *100,
                })
                history.push("/success", {data:res.data})
            }catch(err){}
        }
        stripeToken && cart.total>=1 && makeRequest()
    },[stripeToken,cart.total, history])



  const cart = useSelector(state=>state.cart)

  return (
    <Container>
        <Navbar/>
        <Banner/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopButton type="filled">Checkout</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product=>(
                        <Product>
                                <ProductDetail>
                                     <Image src="https://img.freepik.com/free-psd/smartphone-mockup_1310-812.jpg?w=900&t=st=1663928897~exp=1663929497~hmac=0e6f7c45ac409bf50317d85bbeb71362bae2dcd617560fa684f3cb4f0161e019"/>
                                     <Detail>
                                         <ProductName><b>Item:</b>{product.name}</ProductName>
                                         <ProductId><b>ID:</b>{product._id}</ProductId>
                                         <ProductColor color={product.color}/>
                                         <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                    </Detail>
                                </ProductDetail>
                                <PriceContainer>
                                     <PriceDetail>
                                       <AmountContainer>
                                           <Remove />
                                           <Amount>{product.quantity}</Amount>
                                            <Add/>
                                         </AmountContainer>
                                         <Price>{product.price * product.quantity}</Price>
                                     </PriceDetail>
                                </PriceContainer>
                        </Product>
                         ))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping</SummaryItemText>
                            <SummaryItemPrice>$10</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-$10</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice type="total">ETB {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                        name="factos"
                        billingAddress
                        shippingAddress
                        description={`Your Total is ${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey="pk_test_51MoVIfA9b66yeZaJFyOnVgc2PpyLIVf3rPbVwsFD3ZLvTcEj6EimxzskfyxgoBXtu1Hd19ftBwNT6ZRUqkQyuB6c00bV5pDroH"
                        >
                        <CheckoutBtn>CHECKOUT</CheckoutBtn>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart



const Container = styled.div`
`
const Wrapper = styled.div`
padding:40px;
${mobile({
    padding:"10px"
})}
`
const Title = styled.h1`
font-size:40px;
text-align:center;
`
const Top = styled.div`display:flex;
align-items:center;
justify-content:space-between;
`
const TopButton= styled.button`
padding:10px;
cursor:pointer;
border: 2px solid #082d22;
background: ${props=>props.type==="filled"?"black":"transparent"};
color: ${props=>props.type==="filled"?"white":"black"};
transition:.3s;

&:hover{
    background:${props=>props.type==="filled"?"white":"#082d22"};
    color:${props=>props.type==="filled"?"#082d22":"white"}
}
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
margin:20px 0px;
${mobile({
    flexDirection:"column"
})}
`
const Info = styled.div`
flex:3;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const Product = styled.div`
flex:3;
display:flex;
justify-content:space-between;
${mobile({
   flexDirection:"column"
})}
`
const ProductDetail = styled.div`
flex:1;
display:flex;
${mobile({
    height:"70px",
    justifyContent:"space-between",
    // textAlign:"right"
})}
`
const Image= styled.img`
height:100px;
${mobile({
    height:"90px",
})}
`
const Detail = styled.div`
display:flex;
flex-direction:column;
margin:0px 10px;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
margin:5px 0px;
`
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:100%;
background: ${props=>props.color};
${mobile({
    margin:"0"
})}
`

const ProductSize = styled.span`
margin:10px 0px;
${mobile({
    margin:"0"
})}
`
const PriceContainer = styled.div`
flex:1;
`
const PriceDetail = styled.div`

${mobile({
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
})}
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
cursor:pointer;
`
const Amount = styled.h1`
width:30px;
height:30px;
border: 1px solid grey;
display:flex;
align-items:center;
justify-content:center;
border-radius:5px;

${mobile({
    width:"20px",
    height:"20px",
    fontSize:"25px"
})}
`
const Price = styled.span`
font-size:40px;
font-weight:200;
margin:10px 0px;
${mobile({
    fontSize:"25px"
})}
`
const Hr = styled.hr`
margin:10px 0px;
border:none;
height:1px;
background:#00000013;
`
const Summary = styled.div`
flex:1;
border: solid 1px #e1e1e1;
border-radius:3px;
padding:20px;
`
const SummaryTitle = styled.h1`
`
const SummaryItem = styled.div`
line-height:2rem;
display:flex;
justify-content:space-between;
`
const SummaryItemText = styled.span`
font-weight: ${props=>props.type==="total"?"900":"400"}
`
const SummaryItemPrice = styled.span`
font-weight: ${props=>props.type==="total"?"900":"400"}
`
const CheckoutBtn = styled.button`
padding:10px;
background:#082d22;
color:white;
border:solid 2px #082d22;
border-radius:3px;
transition:.3s;
cursor:pointer;
margin:10px 0px;
&:hover{
    background:white;
    color:#082d22;
}
${mobile({
    width:"100%",
    fontSize:"20px",
    padding:"5px"
})}
`


