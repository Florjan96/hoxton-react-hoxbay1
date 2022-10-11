import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
    <Link to='/prove'>
    <img  src={product.image}></img>
    <h3>{product.title}</h3>
    </Link>


</li>
        ))}


      </ul>
    )
}