import './App.css'
import { Routes, Route} from 'react-router'
import { Login } from './pages/login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/tasks/myday' element={<h1>My Day</h1>} />
        <Route path='/tasks/planned' element={<h1>Planned</h1>} />
        <Route path='/tasks/assigned' element={<h1>Assigned to me</h1>} />
        <Route path='/tasks/important' element={<h1>Important</h1>} />
      </Routes>
    </>
  )
}

export default App
