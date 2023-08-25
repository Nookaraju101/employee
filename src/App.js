import './App.scss';
import EmpLoginComponent from './Components/EmpLogin/EmpLogin';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import HomePageComponent from './Components/HomePage/Homepage';
import ForgotPwdComponent from './Components/ForgotPwd/ForgotPwd';
import ChangePwdComponent from './Components/changePwd/ChangePwd';
import ResetPwdComponent from  './Components/resetPwd/ResetPwd';
import SignOutComponent from './Components/Signout/SignOut';
import history from "./history";

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  return (
    <div className="App">
      <Routes>
      <Route
          path="/"
          element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<EmpLoginComponent /> } />
        <Route path='/home' element={<HomePageComponent /> } />
        <Route path='/forgot' element={<ForgotPwdComponent /> } />
        <Route path='/changepwd' element={<ChangePwdComponent /> } />
        <Route path='/reset' element={<ResetPwdComponent /> } />
        <Route path='/signout' element={<SignOutComponent /> } />
      </Routes>
    </div>
  );
}

export default App;
