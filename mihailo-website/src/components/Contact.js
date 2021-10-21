import React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import location from '../assets/img/location.png';
import instagram from '../assets/img/instagram.png';
import email from '../assets/img/email.png';
import Button from 'react-bootstrap/Button';
import discord from '../assets/img/discord.png';

export default function Contact() {
    return (
        <div id="contact">
            <Container fluid className="contact-overlay text-center">
                <Container className="py-5">
                    <Container className="discord-overlay">
                        <a href="https://discord.gg/rFApxnH7uQ"><Image alt="" alt="" src={discord} className="discord-img" ></Image></a>
                        <p className="h1 pt-5 pb-3 text-light slogan-text-lol">PRIDRUŽI SE NAŠEM DISCORD SERVERU</p>
                        <a href="https://discord.gg/rFApxnH7uQ"><Button className="discord-button" variant="dark">Pridruži se</Button></a>
                    </Container>
                </Container>
            </Container>
            <Container fluid className="contact-us-container">
                <Container className="contact-us-container-inner">
                    <p className="h3 pb-5 text-light">KONTAKTIRAJ NAS</p>
                    <Row>
                        <Col sm={12} lg={4}>
                            <div className="contact-item">
                                <Image alt="" alt="" src={email} className="contact-img" ></Image>
                                <p className="mt-3 text-light">Email: srbgamescoach@gmail.com</p>
                            </div>
                        </Col>
                        <Col sm={12} lg={4}>
                            <div className="contact-item">
                                <a href="https://www.instagram.com/igic_28/">
                                    <Image alt="" alt="" src={instagram} className="contact-img" ></Image>
                                    <p className="mt-3 text-light">AdriaGamingAcademy</p>
                                </a>
                            </div>
                        </Col>
                        <Col sm={12} lg={4}>
                            <div className="contact-item">
                                <Image alt="" alt="" src={location} className="contact-img" ></Image>
                                <p className="mt-3 text-light">Location: Belgrade, Serbia</p>
                            </div>
                        </Col>
                    </Row>
                    <p className="h3 mt-5 pt-5 text-light">HEAD COACHES</p>
                </Container>
            </Container>
            <Container fluid className="about-us-addition"></Container>
        </div>
    );
}