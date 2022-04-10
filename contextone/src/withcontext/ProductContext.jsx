import React,{createContext} from 'react'

export const ProductContext =createContext();

export const ProductProvider = (props) => {
    const [product,setProducts] = useState(initi)
