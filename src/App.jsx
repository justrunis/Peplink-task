import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Jokes from "./pages/Jokes";
import Shop from "./pages/Shop";
import Error from "./pages/Error";

import Header from "./components/UI/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/jokes" element={<Jokes />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
