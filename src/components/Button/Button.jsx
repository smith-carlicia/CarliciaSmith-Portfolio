import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Button.css';


const theButton = (props) => {
    return (
        <>
            <Container 
                fluid>
                    <Button className="buttonLink" target="_blank" variant="outline-dark" href={props.deployed}>Deployed</Button>
                    <Button className="buttonLink" target="_blank" variant="outline-dark" href={props.repo}>Repo</Button>   
            </Container>
        </>
    )
}

export default theButton;