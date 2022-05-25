import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import StoreProvider from "./store/Store";

function App() {
  return (
    <>
      <Router>
        <StoreProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </StoreProvider>
      </Router>
    </>
  );
}

export default App;
