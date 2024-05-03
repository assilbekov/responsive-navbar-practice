import "./app.css";

function App() {
  return (
    <div className="primary-header flex">
      <div className="logo">LOGO</div>

      <button
        aria-controls="primary-navigation"
        aria-expanded="false"
        className="mobile-nav-toggle"
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul id="primary-navigation" className="flex primary-navigation">
          <li className="active">
            <a href="#index.html">
              <span aria-hidden="true">00</span> Home
            </a>
          </li>
          <li className="active">
            <a href="#index.html">
              <span aria-hidden="true">01</span> Destination
            </a>
          </li>
          <li className="active">
            <a href="#index.html">
              <span aria-hidden="true">02</span> Crew
            </a>
          </li>
          <li className="active">
            <a href="#index.html">
              <span aria-hidden="true">03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
