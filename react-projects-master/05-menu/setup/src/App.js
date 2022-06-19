import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = items.map(item => item.category);

const uniqueCategories = ['all', ...new Set(allCategories)];

function App() {

  const [menuList, setMenuList] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuList(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuList(newItems);
  }

  return <main>
    <section className="menu section">
      <div className='title'>
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={uniqueCategories} filterItems={filterItems} />
      <Menu items={menuList} />
    </section>
  </main>
}

export default App;
