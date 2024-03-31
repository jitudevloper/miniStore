import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePages from './components/asa/HomePages';
import Login from './components/login/Login';
import SignUp from './components/singup/SignUp';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>

     <Routes>
      
      <Route path='/' Component={Login} />
      <Route path="/SignUp" Component={SignUp} />
      <Route path='/home' Component={HomePages} />
     </Routes>
    </>
  );
}

export default App;
