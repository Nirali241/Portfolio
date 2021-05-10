import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import pic from './Image/About.jpeg'
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
function About() {
    Aos.init();
    return (
        <div id="About">
            <section className="about my-5">
            <div className="container ">
                <div className="text-center">
                    <h1 data-aos="fade-up" data-aos-offset="200">About <span className="text-primary">Me</span></h1>
                    <hr  className="w-25 m-auto" />
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-12 my-5" data-aos="zoom-in" data-aos-offset="200">
                        <h1>What do you <span className="text-primary">want to know?</span></h1>
                        <p className="p-2">I am seeking to secure a fun, exiting and challenging
                                software development position that will allow me to
                                    utilize my passion, best skill and experience regarding
                                    design in Photoshop. Also to be a part of an organization
                                    where I can fully utilize my skill and make a significant contribution to the success
                        </p>
                        <Button variant="light" className="mb-5">More about me</Button>

                        <Accordion defaultActiveKey="0">
                        <Card data-aos="zoom-in-left" data-aos-offset="200">
                            <Card.Header>
                            <Accordion.Toggle as={Button} className="text-primary fs-6" variant="light"  eventKey="0">
                                Education
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                2016 - 2019
                                Shree Swami Atmanand Saraswati Institute of Technology
                                B.E(CSE) CGPA - 8.67
                                
                                2013 - 2016
                                Government Polytechnic for Girls
                                Diploma CGPA - 8.32

                                2013
                                10th (SSC) - 82%
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} className="text-primary fs-6" variant="light" eventKey="1">
                                Skills
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Bootstrap<br></br>
                                    HTML &CSS<br></br>
                                    Data Structure<br></br>
                                    Java<br></br>
                                    JavaScript<br></br>
                                    Photoshop<br></br>
                                    React Js
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} className="text-primary fs-6" variant="light" eventKey="1">
                                Co Curricular Activities
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Achieve The Title of <strong>Miss Gujarat Top Model (Season 2) 2020</strong> <br></br>
                                Participated in Hackathon<br></br>
                                GTU 100 Points Activity Program<br></br>
                                Learnt Photoshop : A National Computer Literacy Training Program<br></br>
                                Participated in The State Level Technical Festival titled - Vaividhya15<br></br>
                                Participated in Drawing Competition topic "Mahatma Gandhi & Cleanliness" Organized by Government Polytechnic for Girls.<br></br>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end profile" data-aos="fade-right" data-aos-offset="200">
                        <img src={pic} className="img-fluid img-thumbnail"  alt="pic"></img>
                    </div>
                </div>
                
            </div>
            </section>
            
        </div>
    )
}

export default About