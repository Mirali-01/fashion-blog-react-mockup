import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import articleInfo from "./models/articleInfo";

function App() {
  const articles = articleInfo.map((articles) => {
    return <Article articles={articles} />;
  });

  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="articleBox"> {articles} </div>
      <Footer />
    </div>
  );
}

export default App;
