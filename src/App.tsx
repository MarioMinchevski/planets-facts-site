import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PlanetPage } from "./Pages/PlanetPage/PlanetPage";
import { Navbar } from "./Layout/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="planet/:name" element={<PlanetPage />} />
        <Route path="planet/:name/:section" element={<PlanetPage />} />
        <Route path="*" element={<Navigate to="/planet/Mercury" />} />
      </Routes>
    </Router>
  )
}

export default App;
