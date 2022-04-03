import React from 'react'

const SurpriseButton = ({callbackFuncProp}) => {

  const handleSurprise = ()=> {

    return callbackFuncProp();
    
  }


  return (
    <div>
        <button onClick={handleSurprise}>Surprise Me</button>
    </div>
  )
}

export default SurpriseButton