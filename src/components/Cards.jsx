import React from 'react'
import styled from 'styled-components'
import {Timer} from '@mui/icons-material'


const Container = styled.div`
display:flex;
padding:2rem;
padding-left:1rem;
padding-right:1rem;
background: pink;
width:60%;
margin:auto;
justify-content:center;
gap:7rem;
position:relative;
`
const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: blue;
padding:1rem;
padding-left:2rem;
padding-right:2rem;
border-radius:2rem;

`
const Image = styled.img`
`
const Text = styled.p`
font-size:2rem;
`

const Cards = () => {
  return (
    <Container>
      <Card>
      <Timer class=''/>
        <Text>Fast shipping</Text>
      </Card>
      <Card>
      <Timer class=''/>
        <Text>Fast shipping</Text>
      </Card>
      <Card>
        <Timer class=''/>
        <Text>Fast shipping</Text>
      </Card>
    </Container>
  )
}

export default Cards