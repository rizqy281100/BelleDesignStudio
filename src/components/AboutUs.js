import React from 'react';
import { Container, Row, Col, Card, Image, Accordion } from 'react-bootstrap';
import teamwork from '../assets/images/teamwork.jpg';
import admin4 from '../assets/images/admin4.jpg';
import admin2 from '../assets/images/admin2.jpg';
import admin3 from '../assets/images/admin3.jpg';
import '../components/css/AboutUs.css';
import Navbar from './MyNavbar.js';

const AboutUs = () => {
    return (
        <Container className="my-5">
            <Navbar/>
            <Row className="mb-5 align-items-center" gap="5">
                <Col md={6}>
                    <Image src={teamwork} fluid alt="Our Team"/>
                </Col>

                <Col md={6}>
                    <h3 className="text-align-center font-medium">Who Are We</h3>
                    <p className="font-regular">
                    Established in 2021, Belle Design Studio is a design firm based in Jakarta, Indonesia. We specialize in designing for exhibitions, interiors, and theme parks. <br/>
                    Our company was founded in April 2021, and we aim to provide the best visualization, design, and build services across B2B brands in both Indonesia and Singapore. Our company’s design service is known for its aesthetic solution with a touch of business consideration and consultation.<br/>
                    </p>
                </Col>
            </Row>

            <Row className="mb-5 bg_img">
                <Col>
                    <h2 className="text-center">Vision and Mission</h2>
                    <p>
                        <strong>Vision:</strong> We aim to share our love for exceptional design in our projects by integrating cutting-edge technology and a futuristic mindset into the design industry.

                    </p>

                    <p>
                        <strong>Mission:</strong> We utilize digital technology to create contemporary, refined, and stylish designs, reaching out to international clients to explore new opportunities in the Indonesian design market while supporting companies in enhancing their visual presence and expanding their business.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
      <Col>
        <h2 className="text-center">Our Team</h2>
        <Row>
          <Col md={4}>
            <Card className="hover-card">
              <Card.Img variant="top" src={admin4} />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>CEO</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="hover-card">
              <Card.Img variant="top" src={admin2} />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>CTO</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="hover-card">
              <Card.Img variant="top" src={admin3} />
              <Card.Body>
                <Card.Title>Mike Johnson</Card.Title>
                <Card.Text>COO</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>

            <Row className="mb-5">
                <Col>
                    <h2 className="text-center">FAQ</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What services do you offer?</Accordion.Header>
                            <Accordion.Body>
                                We offer a wide range of services including consulting, software development, and project management. Our solutions are tailored to meet the unique needs of each client.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How can we contact you?</Accordion.Header>
                            <Accordion.Body>
                                You can contact us through our website's contact form or by emailing us at contact@ourcompany.com. We also have a dedicated customer service line at 1-800-123-4567.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Where are you located?</Accordion.Header>
                            <Accordion.Body>
                                Our main office is located in New York City, but we have satellite offices in several other major cities around the world. Visit our contact page for more details.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What industries do you specialize in?</Accordion.Header>
                            <Accordion.Body>
                                We specialize in a variety of industries including finance, healthcare, retail, and technology. Our team has the expertise to handle projects in many different fields.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;