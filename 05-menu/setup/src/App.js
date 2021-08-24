import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = () => {
  const allCategory = ['all', ...new Set(items.map((item) => item.category))];
  return allCategory;
};

function App() {
  const [menu, setMenu] = useState(items);
  const [catetory] = useState(allCategories);

  const filterItem = (category) => {
    if (category === 'all') {
      return setMenu(items);
    }
    const newItem = items.filter((item) => item.category === category);
    return setMenu(newItem);
  };

  return (
    <main>
      <section className="menu">
        <h2 className="title">our menus</h2>
        <div className="underline"></div>
      </section>
      <Categories filterItem={filterItem} catetory={catetory} />
      <Menu menu={menu} />
    </main>
  );
}

export default App;
