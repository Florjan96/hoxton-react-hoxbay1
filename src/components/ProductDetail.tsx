import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function ProductDetail(){
    const[item,setItem]=useState(null)
    const params=useParams()
    useEffect(()=>{
        fetch(`http://localhost:4000/products/${params.id}`)
        .then(resp=>resp.json())
        .then(singleItem=>setItem(singleItem))
    },[])

    if(item===null)
    return <div><h1>Loading</h1></div>

    return(
        <section className="product-detail main-wrapper">
        <img
      src={item.image}
      alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    />
    <div className="product-detail__side" >
      <h3></h3>
      <h2>{item.title}</h2>
      <p>
      {item.description}
      </p>
      <p>{item.price}</p>
      <button>Add to basket</button>
    </div>
  </section>
    )
}