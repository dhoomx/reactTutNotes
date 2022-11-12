import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogDetails from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <Router>
      <div className="content">
        <Navbar />

        <div className="APP">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
            <Route exact path="/create" element={<CreateBlog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
