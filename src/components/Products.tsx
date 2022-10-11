import { useEffect, useState } from "react"

export function Products(){
    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(resp=>resp.json())
        .then(productsFromServer=>setProducts(productsFromServer))
    },[])
    
    return(
       <h1></h1> 
    )
}