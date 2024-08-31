import './App.css'
import { NavBar } from './components/NavBar'
import { HomeComponent } from './components/HomeView/HomeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetail } from './components/ItemDetail'
import { BrandComponent } from './components/BrandComponent'
import { getProducts } from './asyncMock'
import { useEffect,useState } from 'react'

function App() {
  const [itemList, setItemList] = useState([])
  useEffect(()=>{
    getProducts.then(data=>setItemList(data))
  } ,[])
  return (
    <>
      <BrowserRouter>
        <header className="bg-gray-600 p-4 flex justify-between items-center">
          <BrandComponent linkUrl="/" imageUrl="/images/tech-space-logo.png" />
          <NavBar />
        </header>
        <main>
          {itemList.length > 0 ? (
            <Routes>
              <Route path="/" element={<HomeComponent itemList={itemList} />} />
              <Route path="/category/:id" element={<HomeComponent itemList={itemList} />} />
              <Route path="/item/:itemId" element={<ItemDetail itemList={itemList} />} />
            </Routes>
          ) : (
            <p className='text-center'>Cargando...</p>
          )}
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;


