import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Feed from './pages/Feed';
import './index.css';
import Profile from './pages/Profile';
function App() {
  return (
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/feed" element={<Feed/>} />
  <Route path='/profile' element={<Profile/>}></Route>
  </Routes>
  );
}

export default App;