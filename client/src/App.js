import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import PageAdminTest from './Pages/PageAdminTest'
import PageUserTest from './Pages/PageUserTest'
import PageAdminRegister from './Pages/PageAdminRegister'
import PageAdminMarks from './Pages/PageAdminMarks'
import UserScreen from './Pages/UserScreen';
import PageUserFees from './Pages/PageUserFees'
import PageUserSyllabus from './Pages/PageUserSyllabus';
import PageAdminSyllabus from './Pages/PageAdminSyllabus'
import PageAdminFees from './Pages/PageAdminFees'

import { DataProvider } from './GlobalState';
import PageAdminFeesEdit from './Pages/PageAdminFeesEdit';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          {/* <Route path='/admin' element={<UserScreen></UserScreen>}></Route>
          <Route path='/user' element={<UserScreen></UserScreen>}></Route> */}
          <Route path='/user/tests' element={<PageUserTest></PageUserTest>}></Route>
          <Route path='/admin/tests' element={<PageAdminTest></PageAdminTest>}></Route>
          <Route path='/admin/register' element={<PageAdminRegister></PageAdminRegister>}></Route>
          <Route path='/user/fees' element={<PageUserFees></PageUserFees>}></Route>
          <Route path='/admin/fees' element={<PageAdminFees></PageAdminFees>}></Route>
          <Route path='/user/syllabus' element={<PageUserSyllabus></PageUserSyllabus>}></Route>
          <Route path='/admin/syllabus' element={<PageAdminSyllabus></PageAdminSyllabus>}></Route>
          <Route path='/admin/fees/:std/:id' element={<PageAdminFeesEdit></PageAdminFeesEdit>}></Route>
          <Route path='/admin/tests/:id' element={<PageAdminMarks></PageAdminMarks>}></Route>
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
