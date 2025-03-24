import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Main from "@/pages/main/Main"
import Collection from "@/pages/collection/Collection"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  )
}

export default App
