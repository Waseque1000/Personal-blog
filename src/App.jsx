import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Post from "./page/Post";
import Header from "./component/Headers";
import About from "./page/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
