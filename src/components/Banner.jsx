import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: black;
color: white;
display: flex;
justify-content:center;
font-size: 16px;
font-weight: 500;
`

export const Banner = () => {
  return (
    <Container>
        Super Deal Free Shipping!
    </Container>
  )
}

export default Banner