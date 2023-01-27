import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/header';
import Login from './components/login';
import Welcome from './components/welcome';
import SignUp from './components/signUp';


import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>{
  return (
    
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;


