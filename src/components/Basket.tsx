import { useEffect, useState } from "react"

export function Basket(){
const[basket,setBasket]=useState([])

useEffect(()=>{
  fetch('http://localhost:4000/basket?_expand=product')
  .then(resp=>resp.json())
  .then(basketFromServer=>setBasket(basketFromServer))
},[])

    return(
        <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          <li>
            <article className="basket-container__item">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                width="90"
              />
              <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
              <p>
                Qty:
                <select
                ><option value="0">0</option
                  ><option value="1">1</option
                  ><option value="2">2</option
                  ><option value="3">3</option>
                  </select>
            
              </p>
              <p>Item total: £109.95</p>
            </article>
          </li>
        </ul>
        <h3>Your total: £109.95</h3>
      </section>
    )
}