import Container from 'react-bootstrap/Container';

export default function AboutGame(props) {
    const isFooter = props.game === "Dota 2";
    return (
        <div id={props.id} >
            <Container fluid className={`about-game-container ${props.class}`}>
                <Container className="inner-container">
                    <p className="h3">{props.game}</p>
                    <br/>
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <br/>
                    <p className="h4">Treninzi:</p>
                    <br/>
                    <p>{props.text3}</p>
                    {props.game === "Counter Strike" && 
                        <>
                            <p>- {props.text4}</p>
                            <p>- {props.text5}</p>
                            <p>- {props.text6}</p>
                        </>
                    }

                </Container>
            </Container>
            {isFooter && <Container fluid className="about-game-addition" />}
        </div>
    );
}