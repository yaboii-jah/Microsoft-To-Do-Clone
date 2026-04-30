import './App.css'
import { Routes, Route} from 'react-router'
import { Login } from './pages/login/login'
import { Tasks } from './pages/tasks/tasks'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/tasks/myday' element={<Tasks type="Myday" />} />
        <Route path='/tasks/planned' element={<Tasks type="Planned" />} />
        <Route path='/tasks/assigned' element={<Tasks type="Assigned" />} />
        <Route path='/tasks/important' element={<Tasks type="Important" />} />
      </Routes>
    </>
  )
}

export default App
