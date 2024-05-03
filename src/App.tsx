import { useRef } from "react";
import "./app.css";

function App() {
  const navRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="primary-header flex">
      <div className="logo">LOGO</div>

      <button
        ref={buttonRef}
        aria-controls="primary-navigation"
        aria-expanded="false"
        className="mobile-nav-toggle"
        onClick={() => {
          const nav = navRef.current;
          if (nav) {
            const visible = nav.getAttribute("data-visible") === "true";
            nav.setAttribute("data-visible", String(!visible));
          }
          if (buttonRef.current) {
            const expanded =
              buttonRef.current.getAttribute("aria-expanded") === "true";
            buttonRef.current.setAttribute("aria-expanded", String(!expanded));
          }
        }}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          ref={navRef}
          id="primary-navigation"
          data-visible="false"
          className="flex primary-navigation"
        >
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
