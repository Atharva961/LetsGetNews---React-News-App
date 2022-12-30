import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import News from './News';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { useState, createContext, useContext } from "react";


function App() {
  let [theme, setTheme] = useState("light");


  const changeTheme = () => {
    if (theme === 'light') {
      setTheme("dark");
      document.body.style.backgroundColor = '#292b2c';
      document.body.style.color = 'white';
    }
    if (theme === 'dark') {
      setTheme("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <div className="App">

      <Router>

        <Navbar theme={theme} changeTheme={changeTheme} />

        <Routes>
          <Route path="/" element={<News category="general" theme = {theme}/>} />
          <Route path="/Business" element={<News category="business" theme = {theme}/>} />
          <Route path="/Entertainment" element={<News category="entertainment" theme = {theme}/>} />
          <Route path="/Health" element={<News category="health" theme = {theme}/>} />
          <Route path="/Science" element={<News category="science" theme = {theme}/>} />
          <Route path="/Sports" element={<News category="sports" theme = {theme}/>} />
          <Route path="/Technology" element={<News category="technology" theme = {theme}/>} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
