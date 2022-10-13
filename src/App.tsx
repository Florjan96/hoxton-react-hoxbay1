import { Route, Routes } from 'react-router-dom'
import { Basket } from './components/Basket'
import { Categories } from './components/Categories'
import Header from './components/Header'
import { ProductDetail } from './components/ProductDetail'
import { Products } from './components/Products'

function App() {
  return (
    <>
      <Header />
      <main>
     <Routes>

<Route path='products' element={<Products/>}/>
<Route path='products/:id' element={<ProductDetail/>}/>

<Route path='categories' element={<Categories/>}/>
<Route path='categories/:id' element={<CategoriesDetail/>}/>
<Route path='basket' element={<Basket/>}/>
<Route path='*' element={<h1>Page not found -_-</h1>}/>

      
     </Routes>
      </main>
    </>
  )
}

export default App
