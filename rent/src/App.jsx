import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import PropertyDetail from "./components/PropertyDetails"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
