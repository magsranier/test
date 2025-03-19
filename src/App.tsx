import "./App.css";

const App = () => {
  const items = Array.from({ length: 100 });

  return (
    <div className="container">
      <div className="header">HEADER</div>

      <div className="body">
        {items.map((_, ind) => (
          <div className="item">ITEM {ind}</div>
        ))}
      </div>
      <div className="footer">FOOTER</div>
    </div>
  );
};

export default App;
