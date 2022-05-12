import logo from './logo.svg';
import './App.css';
// import {BrowserRouter} from "react-router-dom"
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Input from './components/Input';
import InputColor from './components/InputColor';

function App() {
  return (
// {/* <BrowserRouter> */}
    <div className="App">
      <Link to={"/home"}></Link>
      <Routes>
        
        <Route path="/home" element={<Home/>}/> {/* this makes it so the Home component only displays when /home is displayed */}

        <Route path="/:display" element={<Input/>}/>

        <Route path="/:display/:textcolor/:backgroundcolor" element={<InputColor/>}/>

      </Routes> 
      
    </div>
    //</BrowserRouter>
  );
}

export default App;
