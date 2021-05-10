import React from 'react'
import {  Col, Form } from 'react-bootstrap'
import Pic from './Image/About.jpeg'
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


function Contact() {
    Aos.init();
    return (
        <div id="Contact">
            <section className="container py-5">
                <div className="container">
                    <div className="text-center my-5">
                        <h1>Contact <span className="text-primary">Us</span></h1>
                        <hr className="w-25 m-auto" />
                    </div>
                    <div className="row my-auto " data-aos="fade-up-left" data-aos-offset="200">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                        <Form>
                        <Form.Row>
                            <Form.Group as={Col} >
                            <Form.Label className="fs-6 pt-2">Name</Form.Label>
                            <br></br>
                            <Form.Label className="fs-5 text-Secondary">Nirali Bhalodiya</Form.Label>
                            <hr className="wt-25 m-auto "/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label className="fs-6 pt-2 ">City</Form.Label>
                            <br></br>
                            <Form.Label className="fs-5 text-Secondary">Vadodara, Gujarat</Form.Label>
                            <hr className="wt-25 m-auto "/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label className="fs-6 pt-2">Degree</Form.Label>
                            <br></br>
                            <Form.Label className="fs-5 text-Secondary">Bachelor of Engineering(CSE)</Form.Label>
                            <hr className="wt-25 m-auto "/>
                            </Form.Group>


                            <Form.Group as={Col} >
                            <Form.Label className="fs-6 pt-2">Email</Form.Label>
                            <br></br>
                            <Form.Label className="fs-5 text-Secondary">bhalodiyanirali241@gmail.com</Form.Label>
                            </Form.Group>
                            </Form.Row>

                        </Form>
                        </div>
                        <div className="hellopic col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end " data-aos="fade-up-right" data-aos-offset="200">
                            <img src={Pic} className="img-fluid img-thumbnail p-2 border border-light" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid bg-primary text-white p-3 text-center fs-4">Developed by Nirali Bhalodiya</div>
            
        </div>
    )
}

export default Contact
