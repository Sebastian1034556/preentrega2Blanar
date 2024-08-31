import './App.css'
import { NavBar } from './components/NavBar'
import { HomeComponent } from './components/HomeView/HomeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetail } from './components/ItemDetail'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [itemList, setItemList] = useState([]);
  const [categories, setCategories] = useState([]);
  const siteId = 'MLA';
  const categoryId = 'MLA1051';
  const url = `https://api.mercadolibre.com/sites/${siteId}/search?category=${categoryId}`;
  const CATEGORY_LIST_URL = `https://api.mercadolibre.com/sites/${siteId}/categories`

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(CATEGORY_LIST_URL);
      const data = await response.json();
      console.table(data)
      setCategories(data);
    }
    getCategories();
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;
  
    async function getItems() {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  
    getItems()
      .then(data => {
        const renameCategories = (catId, categories) => {
          const category = categories.find(c => c.id === catId);
          // El error está acá. category es undefined.
          const categoryName = category ? category.name : 'Sin categoría';
          return categoryName;
        }
  
        const items = data.results.map(item => {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.thumbnail,
            category: renameCategories(item.category_id, categories)
          }
        });
        setItemList(items);
      })
      .catch(err => console.log(err));
  
  }, [categories]);
  

  return (
    <>
      <BrowserRouter>
        <header className="bg-gray-600 p-4 flex justify-between items-center">
          <Link to="/">
            <img src="/images/tech-space-logo.png" alt="Logo de Techspace" className="h-24 mr-5" />
          </Link>
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
