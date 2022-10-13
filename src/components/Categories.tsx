import { useEffect, useState } from "react"
import { getRandomColor } from "../helpers"

export function Categories(){
const[categories,setCategories]=useState([])
useEffect(()=>{
    fetch('http://localhost:4000/categories')
    .then(resp=>resp.json())
    .then(categoriesFromServer=>setCategories(categoriesFromServer))
},[])


    return(
        <section className="categories-container main-wrapper">
    <ul className="categories-container__list">
        {categories.map(category=>(
 <li style={{backgroundColor:getRandomColor()}}>
 <a href={`/categories/${category.id}`}>{category.name}</a>
</li>
        ))}
     
     
    </ul>
  </section>
    )
}