import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import OnHoldPage from "./pages/OnHoldPage/OnHoldPage";
import Home from "./pages/home/home";

// you need to use react-router-dom in this page to be able to serve different pages on different endpoints

/*
Look into how to use display flex
*/

function App() {
  return (
    <BrowserRouter>
      <nav>
        <p>This is the nav, put links here later</p>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onhold" element={<OnHoldPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
