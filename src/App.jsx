import './App.css'
import { Route, Routes } from 'react-router';
// import data from './assets/data.js'
import SubjectIndex from './pages/SubjectIndex';
import SubjectPage from './pages/SubjectPage';

function App() {

  return (
    <>
    {/* <Nav/> */}
    <Routes>
      <Route path='/' element={<SubjectIndex/>}/>
      <Route path='/:subject' element={<SubjectPage />} />
    </Routes>

    </>
  )
}

export default App
