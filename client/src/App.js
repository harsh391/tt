import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import UserScreen from './Pages/UserScreen';
import { DataProvider } from './GlobalState';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/userscreen' element={<UserScreen></UserScreen>}></Route>
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
