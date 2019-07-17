import React from "react";
import {numbers} from '../../../data.js'
import NumberButtons from './NumberButton.js'

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  
  console.log(numbers);
  return (
    
      // console.log(numbersState);
      numbers.map(element =>{
        return(
          < NumberButtons numbersState={element} />
          

        )}
      )

      


    
  )
};

export default Numbers
