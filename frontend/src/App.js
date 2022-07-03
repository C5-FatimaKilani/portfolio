import 'bootstrap/dist/css/bootstrap.min.css';

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
            </header>
    </div>
  );
}

export default App;
