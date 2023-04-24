import React from 'react'
// import {Splide, SplideSlide} from '@splidejs/react-splide'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined} from '@mui/icons-material'
import {sliderItems} from '../../src/data'
import {useState,useEffect} from 'react'
import {mobile} from '../Responsive'

const Container = styled.div `
margin: 0rem 0rem;
padding-top:2rem;
height: 70vh;
display:flex;
position: relative;
align-items: center;
overflow:hidden;
color:white;
background:white;
${mobile({display:"none"})}
`

const Slide = styled.div`
height: 90vh;
display:flex;
align-items:center;
`
const Arrow = styled.div`
background-color: #cccccc;
width:30px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
z-index:998;
color:#04241a;
left:${props=> props.direction === "left" && "2px"};
right:${props=> props.direction === "right" && "2px"};
margin:auto;
cursor: pointer;
`
const Wrapper = styled.div`
display:flex;
transition:1s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
-webkit-animation: slide 2s infinite linear;
align-items:center;
`

const ImgContainer = styled.div`
align-items:center;
height:100vh;
width:50vw;
display:flex;
justify-content:flex-start;
`
const Image = styled.img`
width: 75%;
height:65vh;
border-radius:20%;
`
const InfoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
width: 50vw;
color:#210849;
height:100vh;
`
const Title = styled.h1`
padding-left:8rem;
font-size: 60px;
width:70%;
font-weight:600;
`
const Desc = styled.p`
font-size: 18px;
width:70%;
padding-left:8rem;
color:grey;
margin-top:1rem;
`
const Button = styled.button`
padding: 15px;
padding-left:20px;
padding-right:20px;
font-size:20px;
background:linear-gradient(90deg,#b700ff,#8400ff);
cursor:pointer;
border-radius:50px;
color:white;
margin-left:8rem;
margin-top:2rem;
transition:.3s;
border:solid 0px white;
box-shadow: 1px 20px 30px 2px #290e553b;
&:hover{
    background:white;
    color:#6f2bdd;
    box-shadow:none;
}
`
export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction)=>{
        if(direction==="left")
            setSlideIndex(slideIndex>0? slideIndex-1: 2)
        else 
            setSlideIndex(slideIndex < 2?slideIndex+1:0)
    }

  return (
    <div>
        <Container>
            <Arrow onClick={()=>handleClick("left")} direction="left" >
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                     <Slide key={item.title}>
                     <InfoContainer>
                         <Title>{item.title } </Title>
                         <Desc>{item.desc}</Desc>
                         <Button>Start shopping</Button>
                     </InfoContainer>
                     <ImgContainer>
                     <Image src={item.img}/>
                     </ImgContainer>
                     </Slide>
                ))}
            </Wrapper>             
            <Arrow  onClick={()=>handleClick("right")} direction="right" >
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
        
    </div>
  )
}

export default Slider
