import Container from 'react-bootstrap/Container';

export default function AboutUs() {
    return (
        <div id="aboutUs" >
            <Container fluid className="about-us-container">
                <Container className="inner-container">
                    <p className="h3">O nama</p>
                    <p>Mi smo organizacija koja se bavi treniranjem motivisanih Esport igrača koji žele da napreduju na najbolji mogući nacin. Ne želiš više da gubiš vreme?
                         Pružamo višegodišnje iskustvo koje će ubrzati i omogućiti optimalan napredak svakom igraču koji to želi.</p>
                </Container>
            </Container>
            <Container fluid className="about-us-addition"></Container>
        </div>
    );
}