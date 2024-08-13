import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Auth from "./layouts/Auth"
import DefaultLayout from "./layouts/DefaultLayout"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
