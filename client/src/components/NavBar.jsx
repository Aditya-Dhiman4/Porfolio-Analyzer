import "../App.css";
import PropTypes from "prop-types";

function NavBar({ setActivePage }) {
  return (
    <nav className="bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 mx-4 lg:mx-16 my-4 lg:my-8">
      <div className="container mx-auto flex justify-around items-center p-0">
        <a
          className="nav-link"
          href="#Portfolio-Analyzer"
          onClick={() => setActivePage("portfolio")}
        >
          Portfolio Analyzer
        </a>
        <a
          className="nav-link"
          href="#Sentiment-Analyzer"
          onClick={() => setActivePage("sentiment")}
        >
          Sentiment Analyzer
        </a>
        <a
          className="nav-link"
          href="#Stock-Analyzer"
          onClick={() => setActivePage("stock")}
        >
          Stock Analyzer
        </a>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  setActivePage: PropTypes.string.isRequired
}

export default NavBar;
