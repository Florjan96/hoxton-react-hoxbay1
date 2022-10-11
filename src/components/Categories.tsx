import { useEffect, useState } from "react"

export function Categories(){
const[categories,setCategories]=useState([])
useEffect(()=>{
    fetch('http://localhost:4000/categories')
    .then(resp=>resp.json())
    .then(categoriesFromServer=>setCategories(categoriesFromServer))
},[])

    return(
        <ul className='categories-container__list '>
            {categories.map(categorie=>(
                 <li>
<a href='#'>{categorie.name}</a>

                 </li>
            ))}
         

        </ul>
    )
}