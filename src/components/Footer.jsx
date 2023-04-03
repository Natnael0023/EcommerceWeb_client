import React from 'react'
import styled from 'styled-components'
import {Facebook, Instagram, Twitter, LinkedIn, MailOutline} from '@mui/icons-material'
import {mobile} from '../Responsive'

const Container = styled.div`
display:flex;
background:#061b3b;
color:white;
padding:8rem;
bottom:0;
${mobile({
    flexDirection:"column",
    padding:".5rem"
})}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:10px;
`
const Logo = styled.h2`
${mobile({
    textAlign:"center"
})}
`
const Desc = styled.p`
margin-top:2rem;
margin-bottom:10px;
width:90%;
line-height:1.5rem;
${mobile({
    textAlign :"center",
    width:"100%",
    lineHeight:"2rem",
    fontWeight:"100",
    opacity:".8"
})}
`
const Social = styled.div`
margin-top:2rem;
display:flex;
${mobile({
    marginTop:"0",
    justifyContent:"center"
})}
`
const SocialIcon = styled.div`
width:50px;
height:50px;
border-radius:50%;
display:flex;
align-items:center;
justify-content: center;
background:white;
margin-right:25px;
cursor:pointer;
transition:.5s;
color:#04241a;;

&:hover{
    transform: rotate(-20deg)
}

${mobile({
    width:"40px",
    height:"40px",
    justifyContent:"center"
})}
`
const Center = styled.div`
flex:1;
padding:10px;
display:flex;
justify-content: space-evenly;

${mobile({
    display:"none"
})}
`
const Title = styled.h3`
${mobile({
    textAlign:"center",
    marginTop:"30px"
})}
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-direction:column;
flex-wrap:wrap;
`
const ListItem = styled.li`
`
const Right = styled.div`
flex:1;

`
const ContactItem = styled.div`
margin:20px 0px;
align-items:center;
display:flex;
${mobile({
    margin:"10px 0px",
    justifyContent:"center"
})}
`
export const Footer = () => {
  return (
        <Container>
            <Left>
                <Logo>FACTOS</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, necessitatibus minima eveniet repudiandae laborum provident voluptates eum deserunt voluptatem accusamus,</Desc>
                <Social>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                </Social>
            </Left>
            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
                <List>
                    <ListItem>Men's</ListItem>
                    <ListItem>Women's</ListItem>
                    <ListItem>Socks</ListItem>
                    <ListItem>Shoes</ListItem>
                    <ListItem>Hoodies</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MailOutline/>
                    info@factoshop.com
                </ContactItem>
            </Right>
        </Container>
  )
}
