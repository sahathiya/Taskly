
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Landing from './pages/Landing'
import {ToastContainer} from "react-toastify"
import TaskDetailsModal from './components/TaskDetailsModal'
function App() {


  return (
    <>
    {/* <Navbar/> */}
 <Routes>
  {/* <Route path='/' element={<Landing/>}/> */}
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/signin' element={<SignIn/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/modal' element={<TaskDetailsModal/>}/>
 
 </Routes>
   
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        // hideProgressBar={true}
        // closeOnClick
        // pauseOnHover
        // draggable
       
      />
    </>
  )
}

export default App
