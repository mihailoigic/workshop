import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import visa from '../assets/img/visa.png';
import mastercard from '../assets/img/mastercard.png';
import paypal from '../assets/img/paypal.png';

export default function Footer(props) {
    return (
        <>
            <Container fluid className={`footer text-center ${props.class}`}>
                <Container className="pb-3">
                    <Row>
                        <Col>
                            <img alt="" src={visa} className="footer-img"></img>
                        </Col>
                        <Col>
                            <a href="https://paypal.me/mihailoigic?locale.x=en_US">
                                <img alt="" src={paypal} className="footer-img"></img>
                                </a>
                        </Col>
                        <Col>
                            <img alt="" src={mastercard} className="footer-img"></img>
                        </Col>
                    </Row>
                </Container>
                <p className="h5 text-center text-light fw-light pb-4">&copy; 2021 Serbian Gaming Academy</p>
            </Container>
        </>
    );
}