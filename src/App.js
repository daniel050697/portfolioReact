import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Particles from "react-particles-js";
import ScrollToTop from "react-scroll-to-top";
import {BrowserRouter as Router, Switch , Route } from "react-router-dom";

/* PAGES */
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/about.component";
import Skills from "./components/skills";
import Experience from "./components/Experience.component";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

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
      <ScrollToTop smooth color="#000"/>
      <Navbar fixed="top"/>
      <HeaderPage />
      <About />
      <AdvanceSkills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
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
