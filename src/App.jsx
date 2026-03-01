
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} 
        
        
        />

        {/* Future ready routes */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
