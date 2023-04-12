import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-2 d-flex justify-content-between">
        <div className="col-3">
          <Nav />
        </div>
        <div className="col-8 main">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
