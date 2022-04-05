import React, { createContext , useState } from "react";


export const ThemeContext = createContext() ;



const ThemeContextProvider = () => {

    const [dark, setDark] = useState(true)

  return (
    <div>ThemeContextProvider</div>
  )
}

export default ThemeContextProvider
