import data from "./data";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="http:/" rel="noopener noreferrer">myzone</a>
      </header>
      <main>
        <h1> Featured Products</h1>
        <div className="products">
        {
          data.products.map(product => (
          <div className="product" key={product.price}>
            <a href={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name}/>
            </a>
            <div className="product-info">
              <p>
                {product.name}
              </p>
              <p>
                {product.price}
              </p>
              <button>Add to Cart</button>
            </div>
          </div>))
        }
        </div>

      </main>
    </div>
  );
}

export default App;
