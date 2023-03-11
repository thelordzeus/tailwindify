import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-slate-900 min-h-screen flex ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
