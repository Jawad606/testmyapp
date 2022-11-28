import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Pages1 from "./Pages/Pages_1";
import Pages2 from "./Pages/Pages_2";
import Pages3 from "./Pages/Pages_3";
import Pages4 from "./Pages/Pages_4";
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Pages1 />} />
          <Route path="/Pages_2" element={<Pages2 />} />
          <Route path="/Pages_3" element={<Pages3 />} />
          <Route path="/Pages_4" element={<Pages4 />} />
        </Routes>
    
    </div>
  );
}

export default App;
