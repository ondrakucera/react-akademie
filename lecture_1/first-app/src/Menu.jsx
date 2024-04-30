export const Menu = () => {
  const menu = ['Home', 'About', 'Contact'];
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// .map()
// .filter()
