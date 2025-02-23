import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "../../pages/Home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
