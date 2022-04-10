import {useState} from 'react';
import ProductList from './ProductList';

const initialProducts = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
]

const WithPropsApp = () => {

    const [products, setProducts] = useState(initialProducts)

  return (
    <div>
        <h3>withprops</h3>
        <ProductList products={products}/>

    </div>
  )
}

export default WithPropsApp