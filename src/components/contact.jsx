import React, {Component} from 'react'
import Fade from "react-reveal/Fade";
import Image from "react-bootstrap/Image";
import emailjs, { send } from 'emailjs-com';
import { Container } from 'react-bootstrap';
import {Grid, Row, Col, Button, Form} from "react-bootstrap";

import { confirmAlert } from 'react-confirm-alert'; // On Click alert
//import { Button, Confirm } from 'semantic-ui-react';
/* IMAGE */ 
import CardImage from "../contactMeCard.jpg";

const options = {
    title: 'Title',
    message: 'Message',
    buttons: [
      {
        label: 'Yes',
        onClick: () => alert('Click Yes')
      },
      {
        label: 'No',
        onClick: () => alert('Click No')
      }
    ],
    childrenElement: () => <div />,
    customUI: ({ onClose }) => <div>Custom UI</div>,
    closeOnEscape: true,
    closeOnClickOutside: true,
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypressEscape: () => {},
    overlayClassName: "overlay-custom-class-name"
  };
  
 

const contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_2gvcjre', e.target, 'user_Qgbj94aYN1TwJFtUJBBF4')
          .then((result) => {
              console.log(result.text);
              alert('Message Submitted: Thank You!');
          }, (error) => {
              console.log(error.text);
              alert('Not Complete');
          });
          e.target.reset();
          
      }

    return (
        <div id="contact">
            <div className="contactBody">

            <Fade left cascade>
                <h1 className="aboutMeTitle pt-3 text-center font-details pb-3">CONTACT ME</h1>
            </Fade>
            
            <Container>
                <Row>
                    
                    <Col className="colContact" xs={12} md={6}>
                    <Fade left>
                        <form onSubmit={sendEmail}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label><strong>Subject</strong></Form.Label>
                                <Form.Control type="text" name="subject" className="formSubject" placeholder="Subject" required="true"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label><strong>Name</strong></Form.Label>
                                <Form.Control type="text" name="name" className="formName" placeholder="Your Name" required="true"/>
                            </Form.Group> 
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label><strong>Email address</strong></Form.Label>
                                <Form.Control type="email" name="email" className="formEmail" placeholder="Your Email Address" required="true"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label><strong>Message</strong></Form.Label>
                                <Form.Control as="textarea" rows={5} name="message" className="formMessage" placeholder="Your Message" required="true"/>
                            </Form.Group> 
                            <Button variant="primary" type="submit" className="formSubmitButton" >
                                Submit
                            </Button> 
                        </form>
                    </Fade>
                    </Col>
                    <Col xs={12} md={6}>
                        <Fade right>
                        <span className="p-2">
                            <Image
                            src={CardImage}
                            alt="CSS 3"
                            rounded
                            className="contactMeCardImage"
                            ></Image>{" "}
                        </span>
                        </Fade>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default contact
