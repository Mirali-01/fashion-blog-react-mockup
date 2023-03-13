import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import articleInfo from "./models/articleInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article />
      {/* <Article /> */}
      <Footer />
    </div>
  );
}

export default App;
