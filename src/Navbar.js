import React from 'react'
import { Nav } from 'react-bootstrap'

function Navbar() {
    return (
        <div>
            <Nav className="navbar navbar-expand-lg navbar-light bg-light px-4 bg-white border-bottom fixed-top">
            <div className="container-fluid">
               
                <a className="navbar-brand fs-4" href="#Carouselimage"><strong>My </strong><span className="text-primary">Portfolio</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 text-center">
                    <li >
                    <Nav.Item>
                    <Nav.Link className="nav-link active text-primary" href="#Carouselimage">Home</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li >
                    <Nav.Item>
                    <Nav.Link eventKey="link-1" href="#About">About</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li >
                    <Nav.Item>
                    <Nav.Link eventKey="link-2" href="#Projects">Projects</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li >
                    <Nav.Item>
                    <Nav.Link eventKey="link-2" href="#Contact">Contact Us</Nav.Link>
                    </Nav.Item>
                
                    </li>
                </ul> 
                </div>
            </div>
            </Nav>
            
        </div>
    )
}

export default Navbar
