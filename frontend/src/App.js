import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Navbarr from './components/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbarr/>
        <Home/>
        <Contact/>
        <Projects/>
        <Skills/>
            </header>
    </div>
  );
}

export default App;
