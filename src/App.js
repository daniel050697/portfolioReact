import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/about.component";
import {BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Skills from "./components/skills";
import Experience from "./components/Experience.component";
import Project from "./components/project";

/* RANDOM IMPORT */
import Daniel from "./Profile.jpg";
import Avi from "./randomImage/Avi.png";
import Davide from "./randomImage/Davide.png";
import Edo from "./randomImage/Edo3.png";
import Jaja from "./randomImage/jaja.png";
import James from "./randomImage/James.png"
import ReactLogo from "./reactLogo.png";

function App() {
  return (
    <>
    {/*<Router>
  
      <Navbar fixed="top"/>
        <Switch>
          
          <Route exact path="/" component={HeaderPage}/>
          <Route exact path="/about" component={About}/>
        </Switch>
    </Router>*/}
    <Router>
      <Navbar fixed="top"/>
      <HeaderPage />
      <About />
      <AdvanceSkills />
      <Experience />
      <Project />
    </Router>
    </>
  );
}

const HeaderPage = () =>{
  return (
   <> 
   <Particles
    params={{
      particles: {
        number: {
          value: 90,
          density: {
            enable: true,
            value_area: 1200
          }
        },
        size: {
          value: 4
        },
        shape: {
          type: "circle",
          stroke: {
            width: 2,
            color: "#fff"
          }
        }
      }
    }
    }
    />
    <Header/>
  </>
  )
}

const AdvanceSkills = () =>{
  return (
    <> 
   <Particles
     params={{
       particles: {
         number: {
           value: 180,
           density: {
             enable: false
           }
         },
         size: {
           value: 22,
           random: true
         },
         move: {
          direction: 'bottom',
          out_mode: 'out'
         },
         line_linked:{
          enable:false
         },
         shape: {
           type: "circle",
           stroke: {
             width: 2,
             color: "#fff"
           }
         }
       }
     }
     }
    />
     <Skills/>
     
   </>
  )}

export default App;
