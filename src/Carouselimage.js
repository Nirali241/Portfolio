import React from 'react'
import {Carousel} from 'react-bootstrap';
import reactjs from './Image/reactjs.png'
import css from './Image/css.jpg'
import html from './Image/html.jpg'
import nodejs from './Image/nodejs.jpg'
import './Carouselimage.css'

function Carouselimage() {
    return (
        <div id="Carouselimage">
            <Carousel >
            <Carousel.Item className="homeimage" interval={3000}>
                <img
                className="d-block w-100 h-60"
                src={reactjs}
                alt="React Js"
                />
                <Carousel.Caption>
                <h3>React Js</h3>
                <p>Open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="homeimage"  interval={3000}>
                <img
                className="d-block w-100"
                src={html}
                alt="HTML"
                />
                <Carousel.Caption>
                <h3>HyperText Markup Language</h3>
                <p>The standard markup language for documents designed to be displayed in a web browser.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="homeimage" interval={3000}>
                <img
                className="d-block w-100"
                src={css}
                alt="CSS"
                />

                <Carousel.Caption>
                <h3>Cascading Style Sheets</h3>
                <p>Style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className="homeimage" interval={3000}>
                <img
                className="d-block w-100"
                src={nodejs}
                alt="Node Js"
                />

                <Carousel.Caption>
                <h3>Node Js</h3>
                <p>Open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
        
    )
}

export default Carouselimage
