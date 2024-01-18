import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './components/Student.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Logo from './components/Logo.jsx'
// import AllStudent from './components/Allstudent.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>

    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/education" element={<Education/>}/>
<Route path="/project" element={<Project/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/logo" element={<Logo/>}/>

{/* <Route path="/allstudent" element={<AllStudent/>}/> */}

     
    </Routes>
   
    </BrowserRouter>



    </div>
  );
}

export default App;
