import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import csgo from '../assets/img/games-csgo.png';
import lol from '../assets/img/games-lol.jpg';
import dota2 from '../assets/img/games-dota2.jpg';
import exitBtn from '../assets/img/exit.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function GameTab() {
    const [exitGames, setExitGames] = useState("");

    return (
        <>
            <Container fluid bg="dark" className={`games-tab-overlay text-center ${exitGames}`}>
                <Row>
                    <Col>
                        <Image alt="" onClick={() => { setExitGames("d-none") }} className="exit-button" src={exitBtn} />
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col>
                        <hr className="bg-light hr-tight" />
                    </Col>
                    <Col>
                        <p className="h3 font-allWay text-light">IGRE</p>
                    </Col>
                    <Col>
                        <hr className="bg-light hr-tight" />
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            <Container>
                                <Link
                                    to={"/games#cs"}
                                    onClick={() => {
                                        setExitGames("d-none");
                                        window.scrollTo({
                                            top: 0,
                                            left: 100,
                                            behavior: 'smooth'
                                        });
                                    }}>
                                    <Image alt="" src={csgo} className="games-tab-img"></Image>
                                    <p className="h3 pt-3 pb-3 text-light font-AllWay">Counter Strike</p>
                                </Link>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <Link
                                    to={"/games"}
                                    onClick={() => {
                                        setExitGames("d-none");
                                        window.scrollTo({
                                            top: 1200,
                                            left: 100,
                                            behavior: 'smooth'
                                        });
                                    }}>
                                    <Image alt="" src={lol} className="games-tab-img"></Image>
                                    <p className="h3 pt-3 pb-3 text-light font-AllWay">League of Legends</p>
                                </Link>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <Link
                                    to={"/games#dota"}
                                    onClick={() => {
                                        setExitGames("d-none");
                                        window.scrollTo({
                                            top: 2300,
                                            left: 100,
                                            behavior: 'smooth'
                                        });
                                    }}>
                                    <Image alt="" src={dota2} className="games-tab-img"></Image>
                                    <p className="h3 pt-3 pb-3 text-light font-AllWay">Dota 2</p>
                                </Link>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}