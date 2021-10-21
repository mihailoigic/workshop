import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceItem from '../components/PriceItem.js';

export default function Pricing() {
    return (
        <div id="pricing">
            <Container fluid className="pricing-container">
                <Container className="py-5">
                    <Container>
                        <Row>
                            <Col sm={12} lg={4}>
                                <a href="https://steamcommunity.com/profiles/76561198317294289">
                                    <PriceItem
                                        color="bg-warning"
                                        type="Pojedinačni trening"
                                        price="4.49"
                                        priceOld="6.49"
                                        time="/tr"
                                        check1="Aim training"
                                        check2="Utility usage"
                                        check3="Game sense" />
                                </a>
                            </Col>
                            <Col sm={12} lg={4}>
                                <a href="https://steamcommunity.com/profiles/76561198317845139/">
                                    <PriceItem
                                        color="bg-success"
                                        type="Mesečni paket"
                                        price="21.99"
                                        priceOld="29.99"
                                        time="/mo"
                                        check1="Individualni trening"
                                        check2="3 Treninga nedeljno"
                                        check3="Planski napredak" />
                                </a>
                            </Col>
                            <Col sm={12} lg={4}>
                                <a href="https://steamcommunity.com/profiles/76561198113013840/">
                                    <PriceItem
                                        color="bg-danger"
                                        type="Timski paket"
                                        price="16.99"
                                        priceOld="25.49"
                                        time="/mo"
                                        check1="Timski trening"
                                        check2="Pokazivanje taktika"
                                        check3="Analiza timske igre" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container >
        </div>
    );
}