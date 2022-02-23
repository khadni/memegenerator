import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import memesData from "./memesData";

function App() {
  return (
    <div className="App">
      <Header />
      <Meme id={memesData.data.memes.id} meme={memesData.data.memes} />
    </div>
  );
}

export default App;
