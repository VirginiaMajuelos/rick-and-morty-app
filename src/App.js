import "./App.css";
// import CardList from "./Components/Pages/CardList";
import Home from "./Components/Pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
