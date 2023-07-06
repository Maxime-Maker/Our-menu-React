import Categories from './Categories.jsx';
import Menu from './Menu.jsx';
import Title from './Title';
import data from './data';
import { useState } from 'react';
const tempCategories = data.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];

const App = () => {
  const [eat, setEat] = useState(data);
  const [category] = useState(tempItems);
  const filterCat = (cat) => {
    const filter = data.filter((element) => element.category === cat);
    if (cat === 'all') {
      setEat(data);
    } else {
      setEat(filter);
    }
  };
  return (
    <main>
      <section className="menu section">
        <Title title="Our menu" />
      </section>

      <Categories category={category} filterCat={filterCat} />
      <Menu eat={eat} />
    </main>
  );
};

export default App;
