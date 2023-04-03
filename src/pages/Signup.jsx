import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import {mobile} from '../Responsive'

const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
`

const Left = styled.div`
flex:1;
height:100%;
position:relative;
color:black;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`

const Wrapper = styled.div`
margin:50px 0px;
color:white;
display:flex;
flex-direction:row;
align-items:center;
`

const Title = styled.h1`
font-size:20px;
font-weight:300;
color:#12211c;
`
const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
width:70%;
${mobile({
    width:"90%",
})}
`
const Input = styled.input`
width:97%;
margin:10px 10px;
padding:15px 5px;
border:none;
border-radius:2px;
background:#dedede;
font-size:18px;
outline:none;
`
const Span = styled.span`
font-size:12px;
opacity:0.8;
width:98%;
`
const Agreement = styled.span`
font-size:12px;
margin:10px ;
width:100%;
${mobile({
    textAlign:"center"
})}
`
const Text = styled.span`
font-size:12px;
opacity:0.8;
width:100%;
text-align:center;
`
const SignupBtn = styled.button`
width:100%;
padding:10px;
border:solid 2px #082d22;
border-radius:2px;
cursor:pointer;
background:#082d22;
color:white;
font-size:18px;
margin:20px 0px;
transition:.3s;

&:hover{
    background: white;
    color:#082d22;
}
`
const Link = styled.a`
color:#082d22;
font-size:16px;
margin:0 5px;
`

const Right = styled.div`
flex:1;
height:100%;
background:#00000085;
color:white;
display:flex;
flex-direction:column;
align-items:center;
${mobile({
    display:"none"
})}
`
const ImageContainer = styled.div`
height: 100%;
display:flex;
align-items:center;
`
const Image = styled.img`
width:100%;
`

export const Signup = () => {
  return (
        <Container>
            <Banner/>
            <Navbar/>
            <Wrapper>
                <Left>
                <Title>CREATE ACCOUNT</Title>
                <Form>
                    <Span>NAME</Span>
                    <Input placeholder="name"/>
                    <Span>EMAIL</Span>
                    <Input placeholder="email"/>
                    <Span>PASSWORD</Span>
                    <Input placeholder="password"/>
                    <Agreement>
                        BY CLICKING REGISTER BUTTON YOU AGREED TO TERMS AND CONDITIONS
                    </Agreement>
                    <SignupBtn>
                        REGISTER
                    </SignupBtn>
                </Form>
                <Text>
                Already have an account?
                    <Link href="./Signin"> LOGIN</Link>
                </Text>
                </Left>
                <Right>
                  <ImageContainer>
                      <Image src="https://img.freepik.com/free-photo/happiness-people-laughing-black-woman-smiling-looking-carefree-joyful-chuckle-smth-funny-standing-white-background_176420-50449.jpg?w=1380&t=st=1664008800~exp=1664009400~hmac=e514568d11d98e5f0dda25076b193a0cb8b42cc5754f66616202648119aa9ffc"/>
                  </ImageContainer>
                </Right>
            </Wrapper>
            <Footer/>
        </Container>
      )
}
