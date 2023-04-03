import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container = styled.div`
margin:60px 0px;
height:80vh;
// width:100vw;
overflow:hidden;

${mobile({
    display:"none"
})}
`
const Img = styled.img`
// height:100%;
width:100%;
position:center;
`

export const Image = () => {
  return (
        <Container>
            <Img src="https://img.freepik.com/free-photo/shopping-day-international-girlfriends-women-mall_1157-46803.jpg?w=1380&t=st=1664008609~exp=1664009209~hmac=b0882d853cab4cec6521b3c29a1998f34056add3fc36f00a1ee3b98d4e2b0ca8"/>
        </Container>
  )
}

export default Image
