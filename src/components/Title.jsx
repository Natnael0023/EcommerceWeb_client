import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const OurFavorite = styled.h1`
text-align:center;
margin:30px 0px;
`
export const Title = () => {
  return (
    <Container>
        <OurFavorite>Our Favorite</OurFavorite>
    </Container>
  )
}
export const Newest = () => {
    return (
      <Container>
          <OurFavorite>Newest</OurFavorite>
      </Container>
    )
  }

export default Title