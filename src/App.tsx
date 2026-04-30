import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function Registration() {
  return <h2>Registration Page</h2>;
}

function Success() {
  return <h2>Success Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/registration">Registration</Link> |{" "}
      <Link to="/success">Success</Link> |{" "}
      <Link to="/about">About</Link>
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
