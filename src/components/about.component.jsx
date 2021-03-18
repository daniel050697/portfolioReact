import React from "react";
import Container from "react-bootstrap/Container";
import {Grid, Row, Col, Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Profile from "../Profile.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
    return (
        <div id="about" className="backgroundAboutMe">
            <div className="aboutme">
                
            <Fade left cascade>
                <h1 className="aboutMeTitle pt-3 text-center font-details pb-3">ABOUT ME</h1>
            </Fade>

            
            <Container>
                <Row className="pt-3 pb-5 align-items-center rowTest"> 
                    {/* PROFILE PIC*/}
                    
                    <Col xs={12} md={6} className="colPic">
                    <Fade left>
                        <row className="profilePic justify-content-center mb-2 mr-2 ">  
                            <Image className="profile justify-content-end" src={Profile} thumbnail fluid/>
                        </row>
                    </Fade>
                    </Col>
                    

                    {/* DESCRIPTION */}
                    <Col xs={12} md={6} className="colDesc align-items-start p-2 my-details rounded">
                        <Zoom right cascade>
                            <row className="profileDesc">
                                <div className="profileDescStart">Hi, I'm Daniel Santos 
                                </div>
                            
                                <br />
                                <div>
                                A passionate software developer from Milan, Italy.
                                <br />
                                I start coding when i was 14 and my first programming language was C.
                                <br />
                                From then on i discover java and start enjoy coding.
                                <br />
                                I graduated from I.T.I.S Molinari I.T highschool in July 2016.
                                <br />
                                I started working full-time as a Web Developer at HRM Informatica with an apprenticeship contract while studying Computer Science (still taking exams) at the University of Bicocca Milan.
                                <br />
                                After one year i landed a job as a Web Developer at Everis and currently still working here.
                                </div>
                                <br /> <br />
                                    <Col className="d-flex justify-content-center flex-wrap">
                                        <div>
                                        <a href="#">
                                            <Button className="m-2" variant="outline-primary">
                                            Let's talk
                                            </Button>
                                        </a>
                                        </div>
                                        <div>
                                        <a href="https://drive.google.com/file/d/1xGfYabPx5b18Nw-DUfYbliQok0D4h9AQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                            My Resume
                                            </Button>
                                        </a>
                                        </div>
                                        <div>
                                        <a href="https://github.com/daniel050697" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                            GitHub
                                            </Button>
                                        </a>
                                        </div>
                                        <div>
                                        <a href="https://linkedin.com/in/daniel-santos-9a8a32179/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                            </Button>
                                        </a>
                                        </div>
                                    </Col>
                            </row>
                        </Zoom>
                    </Col>
                </Row>
            </Container>
             
            </div>
        </div>
    )
}

export default About
