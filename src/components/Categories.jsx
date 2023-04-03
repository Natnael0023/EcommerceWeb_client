import React from 'react'
import styled from 'styled-components'
import {category} from '../category'
import {CategoryItem} from './CategoryItem'
import {mobile} from '../Responsive'

const Container = styled.div`
display:flex;
width:85vw;
margin:auto;
background:white;
${mobile({padding:"0",flexDirection:"column",width:"100vw"})}
`
export const Categories = () => {
  return (
        <Container>
            {category.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
  )
}
