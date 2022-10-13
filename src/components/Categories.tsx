import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Categories(){
    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(resp=>resp.json())
        .then(productsFromServer=>setProducts(productsFromServer))
    },[])
let fllonxa= products.filter(product=>product.categoryId===3)

    return(
        <nav className="categories">
        <ul>
          <li>
          
        <button onClick={()=>{
           {fllonxa.map(product=>(
           <li>
<img src={product.image}/>
  <h3>{product.title}</h3>

           </li>
           ))}
        }}>HOMEEE</button>
          </li>
          <li>
         
         <Link>   Categories</Link>
          </li>
          <li>
         <Link>Basket</Link>            
          </li>
        </ul>
      </nav>
         

        
    )
}