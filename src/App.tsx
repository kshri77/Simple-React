import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";

// Simple placeholder pages (so no missing file errors)
function Home() {
  return <h2 style={{ textAlign: "center" }}>Welcome to ABC College</h2>;
}

function Success() {
  return <h2 style={{ textAlign: "center" }}>Registration Successful 🎉</h2>;
}

function About() {
  return <h2 style={{ textAlign: "center" }}>About ABC College</h2>;
}

// Simple Navbar (no external file dependency)
function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee", textAlign: "center" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/registration" style={{ margin: "10px" }}>Registration</Link>
      <Link to="/about" style={{ margin: "10px" }}>About</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
