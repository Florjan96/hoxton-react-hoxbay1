import { useEffect, useState } from "react"

export function Products(){
    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(resp=>resp.json())
        .then(productsFromServer=>setProducts(productsFromServer))
    },[])
    
    return(
      <ul className='products-container__list'>
        {products.map(product=>(
<li className='product-item'>
    <img  src={product.image}></img>
    <h3>{product.title}</h3>



</li>
        ))}


      </ul>
    )
}