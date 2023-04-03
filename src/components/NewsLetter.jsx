import React from 'react'
import styled from 'styled-components'
import {Send}  from '@mui/icons-material'
import {mobile} from '../Responsive'

const Container=styled.div`
background:white;
height:60vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

${mobile({
  justifyContent:"center"
})}
`

const Title = styled.h2`
font-size: 40px;
color:#6f2bdd;
${mobile({
  
})}
`
const Desc = styled.div`
font-size:20px;
margin-bottom:5px;
color:#6f2bdd;

${mobile({
  textAlign:"center"
})}
`
const InputContainer = styled.div`
width:50%;
height:40px;
display:flex;
justify-content:space-between;


${mobile({
  justifyContent:"center",
  width:"80%"
})}
`
const Input = styled.input`
border:solid 1px #6f2bdd;
border-radius:50px;
border-top-right-radius:0;
border-bottom-right-radius:0;
flex:8;
padding-left:20px;
outline:none;
`
const Button = styled.button`
flex:1;
border:none;
border-top-right-radius:50px;
border-bottom-right-radius:50px;
background:#6f2bdd;
color:white;
`

export const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite brands!</Desc>
        <InputContainer>
            <Input placeholder="email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>

    </Container>
  )
}
