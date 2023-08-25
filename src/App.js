import './App.scss';
import EmpLoginComponent from './Components/EmpLogin/EmpLogin';
import { Routes, Route } from 'react-router-dom';
import HomePageComponent from './Components/HomePage/Homepage';
import ForgotPwdComponent from './Components/ForgotPwd/ForgotPwd';
import ChangePwdComponent from './Components/changePwd/ChangePwd';
import ResetPwdComponent from  './Components/resetPwd/ResetPwd';
import SignOutComponent from './Components/Signout/SignOut';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EmpLoginComponent /> } />
        <Route path='/home' element={<HomePageComponent /> } />
        <Route path='/forgot' element={<ForgotPwdComponent /> } />
        <Route path='/change' element={<ChangePwdComponent /> } />
        <Route path='/reset' element={<ResetPwdComponent /> } />
        <Route path='/signout' element={<SignOutComponent /> } />
      </Routes>
    </div>
  );
}

export default App;
