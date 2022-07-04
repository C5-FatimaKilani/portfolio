import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Navbarr from './components/Navbar/Navbar'
import Resume from './components/Resume/Resume'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbarr/>
        <Home/>
        <Projects/>
        <Skills/>
        <Resume/>
       <Routes>
         <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/resume" element={<Resume/>}/> 
        </Routes>
            </header>
    </div>
  );
}

export default App;
