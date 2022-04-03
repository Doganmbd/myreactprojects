import React from 'react'
/* import { useGlobalContext } from './Context'; */

const Main = () => {

/*     const {handleClick} = useGlobalContext(); */
  return (
    <div>
{/*         <button onClick= {handleClick}>
            Change
        </button> */}
        <div>
            <label htmlFor="">Search your favorite</label>
            <input type="text" />
        </div>

        <div className="container">
            <h1>coctails</h1>
            <div className="items-container">
                
            </div>
        </div>
    </div>
  )
}

export default Main