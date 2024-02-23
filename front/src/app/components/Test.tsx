import React, { useContext } from 'react'
import { FoodContext } from './Context'

function Test() {
    const { foodData } = useContext(FoodContext);

console.log(foodData)
  return (
    <div>Test</div>
  )
}

export default Test