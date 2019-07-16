import React from "react";
import operators from '../../../data'
import OperatorsButtons from './OperatorButton'
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      
        {operators.map(element =>{
          return (<OperatorsButtons signs = {element} />)
        })}
      
     
    </div>
  )
};

export default Operators

