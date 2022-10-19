import { useEffect, useState } from "react"
import { isHtmlElement } from "react-router-dom/dist/dom"

export function Basket(){
const[basket,setBasket]=useState([])

useEffect(()=>{
  fetch('http://localhost:4000/basket?_expand=product')
  .then(resp=>resp.json())
  .then(basketFromServer=>setBasket(basketFromServer))
},[])

let total=0
for( let item of basket){
  total += item.quantity * item.product.price 
}

    return(
        <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {basket.map((basketProduct)=>(
  <li>
  <article className="basket-container__item">
    <img
      src={basketProduct.product.image}
      alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      width="90"
    />
    <p>{basketProduct.product.title}</p>
    <p>
      Qty:
      <select value={basketProduct.quantity}
      onChange={(event)=>{
console.log(event.target.value)
const basketCopy=structuredClone(basket)

const match=basketCopy.find(target=>target.id ===basketProduct.id  )
match.quantity=Number(event.target.value)
setBasket(basketCopy)
      }}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
  
    </p>
    <p>${basketProduct.product.price * basketProduct.quantity}</p>
  </article>
</li>
          ))}
        
        </ul>
        <h3>${total}</h3>
      </section>
    )
}