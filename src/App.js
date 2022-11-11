import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User/User";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:login" element={<User />} />
        </Routes>
      </Router>
      <ScrollToTop
        smooth
        top={50}
        color="#000"
        style={{
          borderRadius: "12px",
          boxShadow:
            "rgb(255 255 255) 0px 0px 9px, rgb(143 143 143) 0px 1px 8px;",
          background: "rgb(68 34 34);",
        }}
      />
    </>
  );
}

export default App;
