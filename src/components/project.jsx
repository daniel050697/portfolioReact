import React from 'react'

import Fade from "react-reveal/Fade";
import {Grid, Row, Col, Button, Container, Jumbotron, Carousel, Card} from "react-bootstrap";
import Tilt from "react-tilt";
import Image from "react-bootstrap/Image";


/* IMAGE PROJECT*/
import projectCard from "../projectCard.jpg";
import projectCard2 from "../projectCard2.png";
import projectCard3 from "../projectCard3.jpg";
import projectLogo from "../projectLogo.jpg"; //project logo to do 1


const project = () => {
    return (
        <div id="project">
            <div className="projectBody">
                <Fade left cascade>
                    <h1 className="aboutMeTitle pt-3 text-center font-details pb-3" style={{color: "#fff"}}>MY PROJECTS</h1>
                </Fade>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <Jumbotron className="jumbo-style">
                            <Container>
                                <Tilt options={{ max: 10 }}>
                                    <div>
                                        <Card className="projectCard">
                                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                                <h1 className="pt-3 text-center font-details pb-3"> First Project </h1>
                                            </Card.Header>
                                            
                                                <div className="p-2">
                                                    <Image src={projectCard3}
                                                    alt="Project"
                                                    rounded
                                                    className="projectImage m-1"
                                                    >
                                                    </Image>
                                                </div>
                                                <div>
                                                <Card.Body className="d-flex justify-content-center flex-column">
                                                    <div>
                                                        <Card.Title className="text-center">TO DO LIST WEBSITE</Card.Title>
                                                    </div>
                                                    <div>
                                                    <Card.Text className="text-center style">
                                                        <strong className="body-title-style ">Project #1</strong>
                                                        <br />
                                                        <strong>Technology:</strong> React JS, CSS, Bootstrap, SQL?
                                                        <br />
                                                        <strong>Duration:</strong> Yet to start 2020 - 2021?
                                                        <br/>
                                                        <ul className="text-left">
                                                        <strong> Description </strong>
                                                        <li>A simple responsive website where i can write my to do list.</li>
                                                        <li>Maybe add a calendar to it.</li>
                                                        <li>Maybe connect to a Database.</li>    
                                                        </ul>
                                                        <h6 className="d-flex justify-content-center flex-wrap">Not yet started, button blocked</h6>
                                                        <Col className="d-flex justify-content-center flex-wrap">
                                                        <div>
                                                        <a href="#">
                                                            <Button className="m-2" variant="outline-dark" disabled>
                                                            GitHub
                                                            </Button>
                                                        </a>
                                                        </div>
                                                        <div>
                                                        <a href="#">
                                                            <Button className="m-2" variant="outline-danger" disabled>
                                                            Live
                                                            </Button>
                                                        </a>
                                                        </div>
                                                        </Col>
                                                    </Card.Text>
                                                    </div>
                                                </Card.Body>
                                                </div>
                                        </Card>
                                    </div>
                                </Tilt>
                            </Container>
                        </Jumbotron>
                    </Carousel.Item>
                <Carousel.Item interval={3000}>
                <Jumbotron className="jumbo-style">
                    <Container>
                        <Tilt options={{ max: 10 }}>
                            <div>
                                <Card className="projectCard">
                                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                        <h1 className="pt-3 text-center font-details pb-3"> Second Project </h1>
                                    </Card.Header>
                                    
                                        <div className="p-2">
                                            <Image src={projectCard2}
                                            alt="Project"
                                            rounded
                                            className="projectImage m-1"
                                            >
                                            </Image>
                                        </div>
                                        <div>
                                        <Card.Body className="d-flex justify-content-center flex-column">
                                            <div>
                                                <Card.Title className="text-center">#Hashtag Interactive chat</Card.Title>
                                            </div>
                                            <div>
                                            <Card.Text className="text-center style">
                                                <strong className="body-title-style ">Project #2</strong>
                                                <br />
                                                <strong>Technology:</strong> React JS, CSS, Bootstrap, Firebase Database, SQL
                                                <br />
                                                <strong>Duration:</strong> Yet to start 2021 - 2022?
                                                <br/>
                                                <ul className="text-left">
                                                <strong> Description </strong>
                                                <li>A simple responsive website where i can choose an #HashTag and chat with the people that choose the same #HashTag.</li>
                                                <li>Add Autentication with Google Account.</li>
                                                <li>Connect to a Firebase Database.</li>    
                                                </ul>
                                                <h6 className="d-flex justify-content-center flex-wrap">Not yet started, button blocked</h6>
                                                <Col className="d-flex justify-content-center flex-wrap">
                                                <div>
                                                <a href="#">
                                                    <Button className="m-2" variant="outline-dark" disabled>
                                                    GitHub
                                                    </Button>
                                                </a>
                                                </div>
                                                <div>
                                                <a href="#">
                                                    <Button className="m-2" variant="outline-danger" disabled>
                                                    Live
                                                    </Button>
                                                </a>
                                                </div>
                                                </Col>
                                            </Card.Text>
                                            </div>
                                        </Card.Body>
                                        </div>
                                </Card>
                            </div>
                        </Tilt>
                    </Container>
                </Jumbotron>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default project
