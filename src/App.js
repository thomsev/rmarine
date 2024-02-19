import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import BestillTime from "./components/bestilltime/bestilltime";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bestilltime" element={<BestillTime />} />
            {/* Add more Route components as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
