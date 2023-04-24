import React from 'react'
import { useLocation } from 'react-router-dom'

export const success = () => {
    const location = useLocation()
  return (
    <div>successful</div>
  )
}
