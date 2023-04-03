import React from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined, SearchOutlined,FavoriteBorderOutlined} from '@mui/icons-material'
import {mobile} from '../Responsive'
import { Link } from 'react-router-dom';


export const Product = ({item}) => {
  return (
    <Container>
                    {item.name}
                    {item.price}

        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}


const Info = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
opacity:0;
transition:.5s;
background:#00000041;
`

const Container = styled.div`
margin:10px 0px;
height:30vh;
width:20vw;
align-items:center;
position:relative;
border-radius:10px;

&:hover ${Info}{
    opacity:1;
}

${mobile({
    width:"85vw",
    margin:"10px 0px"
})}
`
const Image = styled.img`
height:100%;
width:100%;
border-radius:3px;
`
const Circle = styled.div`
`
const Icon = styled.div`
cursor:pointer;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background-color:white;
margin:10px;
transition:.5s;

&:hover{
    transform:scale(1.1)
}
`
