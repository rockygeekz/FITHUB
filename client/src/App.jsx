import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navabar from "./Components/Navabar";

function App() {
  return (
    <Router>
        <Navabar/>
      <Routes>
        <Route 
        path="/"
        element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
