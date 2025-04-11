import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import PropertyDetail from "./components/PropertyDetails"
import Properties from "./components/Properties"
import Team from "./components/Team"
import News from "./components/News"
import Contact from "./components/Contact"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:type" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
