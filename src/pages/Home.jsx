import React from 'react'
import { Navbar } from '../components/Navbar'
import {Banner} from '../components/Banner'
import {Slider} from '../components/Slider'
import {Categories} from '../components/Categories'
import {Products} from '../components/Products'
import {NewsLetter} from '../components/NewsLetter'
import { Footer } from '../components/Footer'
import Title from '../components/Title'
import styled from 'styled-components'
import Image from '../components/Image'
import Cards from '../components/Cards'

const Text = styled.h1
`
margin:20px 8rem;
`

export const Home = () => {
  return (
    <div>
        <Banner />
        <Navbar />
        <Slider />
        {/* <Cards/> */}
        <Title/>
        <Categories />
        <Title/>
        <Products />
        <Image/>
        <NewsLetter/>
        <Footer/>
        
    </div>
  )
}
