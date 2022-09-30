
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Login/RequireAuth/RequireAuth';
import SocialLogin from './Login/SocialLogin/SocialLogin';
import Home from './Home/Home/Home';

function App() {
  return (
    <div className="">
      <header></header>
      <Routes>
      <Route path="/home" element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<SocialLogin></SocialLogin>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
