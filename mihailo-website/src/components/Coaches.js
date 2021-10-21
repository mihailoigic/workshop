import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mihailo from '../assets/img/coaches/mihailo.png';
import indzo from '../assets/img/coaches/indzo.jpeg';
import lonk from '../assets/img/coaches/lonk.jpeg';
import CardItem from '../components/CardItem.js';

export default function Coaches() {
    return (
        <div id="coaches">
            <Container fluid className="coaches-container">
                <Container className="py-5">
                    <Container>
                        <Row>
                            <Col sm={12} lg={4}>
                                <a href="https://steamcommunity.com/profiles/76561198317294289">
                                    <CardItem src={mihailo} name="Mihailo 'ha0s' Igić" age="1998" game="Counter Strike"/>
                                </a>
                            </Col>
                            <Col sm={12} lg={4}>
                                <a href="https://steamcommunity.com/profiles/76561198317845139/">
                                    <CardItem src={indzo} name="Nikola '1ndz0' Zivanović" age="2001" game="League of Legends"/>
                                </a>
                            </Col>
                            <Col sm={12} lg={4}>
                                <a href="https://steamcommunity.com/profiles/76561198113013840/">
                                    <CardItem src={lonk} name="Luka 'Lonk' Ognjanović" age="1993"game="Dota 2" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container >
        </div>
    );
}