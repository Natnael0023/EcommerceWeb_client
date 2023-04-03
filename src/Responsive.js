import {css} from 'styled-components'
import React from 'react'

export const mobile = (props)=>{
return css`
@media only screen and (max-width:400px){
         ${props}
    }`
}
