import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Board from '~/pages/Boards/_id'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/Boards" element={<Board />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
