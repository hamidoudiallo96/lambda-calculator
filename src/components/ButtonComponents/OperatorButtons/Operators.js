import React from "react";
import {operators} from '../../../data'
import OperatorButtons from './OperatorButton'
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  console.log(typeof operators)
  return (
    <div>
      
      {operators.map((operator, index) => {
           return (<OperatorButtons signs={operator.char} key={index} />)
         })}
      
     
    </div>
  )
};

export default Operators

