import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin_dash from './components/Admin_dash';
import Student from './components/Student';
import StudentDashboard from './components/Studentdashboard';
import Login from './components/Login';
import Main from './components/Main';
import Email from './components/Email';
import PrivateRoutes from './components/PrivateRoutes';


function App() {
  return (
    <div>
     <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/l'} element={<Login/>}></Route>
        <Route element = {<PrivateRoutes/>}></Route>
        <Route path={'/addash'} element={<Admin_dash/>}></Route>
        <Route path={'/list'}  element={<Student/>}></Route>
        <Route path={'/s'} element={<Main child={<StudentDashboard/>}/>}></Route> 
        <Route path={'/mail'} element={<Email/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
