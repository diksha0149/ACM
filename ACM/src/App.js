
import './App.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home'
function App() {
  return (
    <div className="App">
       <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/About_us' exact component={About} /> 
        <Route path='/Contact' exact component={Contact} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
