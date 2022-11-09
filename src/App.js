import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/pages/User/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
