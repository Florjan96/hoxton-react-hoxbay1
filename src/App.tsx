import { Route, Routes } from 'react-router-dom'
import { Basket } from './components/Basket'
import { Categories } from './components/Categories'
import Header from './components/Header'
import { Products } from './components/Products'

function App() {
  return (
    <>
      <Header />
      <main>
     <Routes>
<Route path='products' element={<Products/>}/>
<Route path='categories' element={<Categories/>}/>
<Route path='basket' element={<Basket/>}/>

      
     </Routes>
      </main>
    </>
  )
}

export default App
