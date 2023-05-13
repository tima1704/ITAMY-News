import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Main/Header";
import { AddNews } from "./Pages/AddNews";
import { Sport } from "./Pages/Sport";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_news" element={<AddNews />} />
        <Route path="/sport" element={<Sport />} />
      </Routes>
    </div>
  );
}

export default App;
