import MenuItem from './MenuItem';

const Menu = ({ eat }) => {
  return (
    <div className="section-center">
      {eat.map((element) => (
        <MenuItem key={element.id} element={element} />
      ))}
    </div>
  );
};
export default Menu;
