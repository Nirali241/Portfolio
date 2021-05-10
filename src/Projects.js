import React from 'react'
import { Button, Card } from 'react-bootstrap'
import amazon from './Image/amazon.png'
import childfund from './Image/childfund.png'
import tiger from './Image/tiger.png'
import ebook from './Image/e-book.png'
import dreamhome from './Image/dream-home.png'
import unsplash from './Image/unsplash.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Projects() {
    Aos.init();
    return (
        <div id="Projects">
            <section className="Projects py-5 bg-light ">
                <div className="container">
                    <div className="text-center my-5">
                    <h1>Project & <span className="text-primary">Company Assignments</span></h1>
                    <hr className="w-26 m-auto" />
                    </div>
                    
                    <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-5  text-center ">
                         
                          <Card style={{ width: '19rem' }}  >
                            <Card.Img className="allimg-set"variant="top" src={amazon} />
                            <Card.Body>
                                <Card.Title>Amazon-Clone</Card.Title>
                                <Card.Text>
                                    E-commerce website to assist people making purchases online.
                                </Card.Text>
                                <Button variant="primary mx-2" href="https://amazon-clone-lime.vercel.app/">Visit Site</Button>
                                <Button variant="primary" href="https://github.com/Nirali241/amazon-clone">View Code</Button>
                            </Card.Body>
                            </Card>
                           
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-5 text-center">

                        <Card style={{ width: '19rem' }} >
                            <Card.Img className="allimg-set"variant="top" src={tiger} />
                            <Card.Body>
                                <Card.Title>Survey Tiger</Card.Title>
                                <Card.Text>
                                    Survey Tiger is a web app where users can create or take surveys.
                                </Card.Text>
                                <Button variant="primary mx-2" href="https://tiger-survey-six.vercel.app/">Visit Site</Button>
                                <Button variant="primary" href="https://github.com/Nirali241/Tiger_Survey">View Code</Button>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-5  text-center">

                        <Card style={{ width: '19rem' }} >
                            <Card.Img className="allimg-set"variant="top" src={childfund} />
                            <Card.Body>
                                <Card.Title>Dashboard-Home</Card.Title>
                                <Card.Text>
                                    Dashboard home page UI desing for Children's Education Funds.
                                </Card.Text>
                                <Button variant="primary mx-2" href="https://dashboard-home-seven.vercel.app/">Visit Site</Button>
                                <Button variant="primary" href="https://github.com/Nirali241/dashboard_home">View Code</Button>
                            </Card.Body>
                            </Card>
                        </div>
                        
                    </div>
                    
                    <div className="row mt-5 " data-aos="zoom-in-down" data-aos-offset="200" >         
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-5  text-center">

                        <Card style={{ width: '19rem' }}>
                            <Card.Img className="allimg-set"variant="top" src={ebook} />
                            <Card.Body>
                                <Card.Title>E-Book</Card.Title>
                                <Card.Text>
                                    E-Book is web app which display diffrent types of functionalities.
                                </Card.Text>
                                <Button variant="primary mx-2" href="https://e-book.vercel.app/">Visit Site</Button>
                                <Button variant="primary" href="https://github.com/Nirali241/e-book">View Code</Button>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-5  text-center">
                            
                        <Card style={{ width: '19rem' }} >
                            <Card.Img className="allimg-set"variant="top" src={dreamhome} />
                            <Card.Body>
                                <Card.Title>Dream-Home</Card.Title>
                                <Card.Text>
                                    Design real-estate web app for finding Perfect dream home.
                                </Card.Text>
                                <Button variant="primary mx-2" href="https://dream-home-real-estate.vercel.app/">Visit Site</Button>
                                <Button variant="primary" href="https://github.com/Nirali241/dream-home-real-estate">View Code</Button>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-5   text-center">

                        <Card style={{ width: '19rem' }} >
                            <Card.Img className="allimg-set"variant="top" src={unsplash} />
                            <Card.Body>
                                <Card.Title>Unsplash</Card.Title>
                                <Card.Text>
                                    Unsplash web app is use to create react-infinite-scroll & Lazy Load.
                                </Card.Text>
                                <Button variant="primary mx-2" href="https://react-infinite-scroll-phi.vercel.app/">Visit Site</Button>
                                <Button variant="primary" href="https://github.com/Nirali241/react-infinite-scroll">View Code</Button>
                            </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
