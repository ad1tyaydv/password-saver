import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Passpage from "./components/passpage";
import Login from "./components/login";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/passwords" element={<Passpage />} />
        </Routes>
      </Router>
  );
}

export default App