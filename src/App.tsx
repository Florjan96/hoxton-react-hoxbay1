import { Route, Routes } from 'react-router-dom'
import { Basket } from './components/Basket'
import { Categories } from './components/Categories'
import Header from './components/Header'
import { Products } from './components/Products'
import { Prove } from './components/Prove'

function App() {
  return (
    <>
      <Header />
      <main>
     <Routes>
<Route path='products' element={<Products/>}/>
<Route path='categories' element={<Categories/>}/>
<Route path='basket' element={<Basket/>}/>
<Route path='prove' element={<Prove/>}/>

      
     </Routes>
      </main>
    </>
  )
}

export default App
