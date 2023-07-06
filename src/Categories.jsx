import './Menu.jsx';
import './data.js';

const Categories = ({ category, filterCat }) => {
  return (
    <div className="btn-container">
      {category.map((cat) => {
        return (
          <button
            key={cat}
            onClick={() => filterCat(cat)}
            className="btn-hipster btn"
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
