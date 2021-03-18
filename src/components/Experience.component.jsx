import React from 'react'
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
    themes,
    createTheme
  } from '@merc/react-timeline';
import {Grid, Row, Col, Button} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

/* IMPORT PICTURE */
import SoftArt from "../SoftArt.png";
import HRMInformatica from "../HRMGroup.jpg";
import Everis from "../Everis.jpg";

/* IMPORT TECH SKILLS LOGO*/
import REACT from "../reactLogo.png";
import HTML from "../htmlLogo.png";
import CSS from "../cssLogo.png";
import MATERIALUI from "../materialUI.png";
import PHP from "../phpLogo.png";
import SQL from "../sqlLogo.png";
import BOOTSTRAP from "../bootstrapLogo.png";
import ANGULAR from "../angularLogo.png";
import JAVASPRING from "../javaspringLogo.png";
import TALEND from "../talendLogo.png";
import OUTSYSTEMS from "../outsystemsLogo.png";
import SELENIUM from "../seleniumLogo.jpg";
import JAVA from "../javaLogo.png";
/* TIMELINE THEME*/
const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#efefef',
    },
    date: {
      backgroundColor: '#3399ff',
    },
    marker: {
      borderColor: '#3399ff',
    },
    timelineTrack: {
      backgroundColor: '#3399ff',
    },
  });


const ExperienceTimeline = () => {
    return (
        <div id="experience" className="experienceBody">
         <Fade left cascade>
            <h1 className="aboutMeTitle pt-3 text-center font-details pb-3" style={{color: "#fff"}}>EXPERIENCE</h1>
        </Fade>
            <Timeline theme={customTheme}>
            <Events>
                <ImageEvent
                    date="06/15"
                    text="SoftArt srl"
                    className="text-center"
                    alt="SoftArt srl"
                    src={SoftArt}
                >
                
                <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Work Position Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Stage as a Web Developer for SoftArt srl
                        <hr />
                        <strong>Task Given:</strong>
                        <ul className="list-styles pt-1">
                          <li>Create a Ticketing Website</li>
                          <li>Learn PHP and SQL basics</li>
                          <li>Responsive Website with BOOTSTRAP</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={CSS}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BOOTSTRAP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={PHP}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={SQL}
                                alt="Material-UI"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SQL
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
                </ImageEvent>
           
                <ImageEvent
                    date="01/19"
                    text="HRM Informatica"
                    className="text-center"
                    alt="HRM Informatica"
                    src={HRMInformatica}
                >
               <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Work Position Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> IT consultant for HRMInformatica
                        <hr />
                        <strong>Task Given:</strong>
                        <ul className="list-styles pt-1">
                          <li>Learn ANGULAR and Java Spring Basics through a boot camp of 3 weeks</li>
                          <li>loaned as a Consultant for Everis then loaned to RGI</li>
                          <li>Learn ETL and Talend then work as a Data Analyst Assistant</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={ANGULAR}
                                alt="ANGULAR"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ANGULAR
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={JAVA}
                                alt="JAVA"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={JAVASPRING}
                                alt="JAVASPRING"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVASPRING
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={TALEND}
                                alt="TALEND"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              TALEND
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={SQL}
                                alt="SQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SQL
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
                </ImageEvent>
            
                <ImageEvent
                    date="03/20 - Current"
                    text="Everis"
                    className="text-center"
                    alt="Everis"
                    src={Everis}
                >
                <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Work Position Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Software Developer and Tester for Everis
                        <hr />
                        <strong>Task Given:</strong>
                        <ul className="list-styles pt-1">
                          <li>Learn Outsystems</li>
                          <li>Build a HomeInsurance Website for the client with Outsystems low code platform</li>
                          <li>Learn Selenium for testing purposes</li>
                          <li>Create Automation Testing for client</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={CSS}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={OUTSYSTEMS}
                                alt="OUTSYSTEMS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              OUTSYSTEMS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={JAVA}
                                alt="JAVA"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={SELENIUM}
                                alt="SELENIUM"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SELENIUM
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
                </ImageEvent>


            </Events>
            </Timeline>
          
        </div>
    )
}

export default ExperienceTimeline
