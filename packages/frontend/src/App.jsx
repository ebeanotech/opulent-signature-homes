import { Route, Routes } from "react-router-dom";
import IntroSlider from "./pages/IntroSlider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllProperties from "./pages/AllProperties";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroSlider />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-properties" element={<AllProperties />} />
      </Routes>
    </div>
  );
}

export default App;
