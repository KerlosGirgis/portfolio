import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{justifySelf:"center",alignSelf:"center",position:"relative"}}>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{filter:"invert(1)"}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/kerlos-amir-7718762a3/"><i className="bi bi-linkedin link-light"></i></a>
                <a href="https://github.com/KerlosGirgis"><i className="bi bi-github link-light"></i></a>
                <a href="mailto:Kerlos.girgis1@gmail.com"><i className="bi bi-envelope-fill link-light"></i></a>
                <a href="tel:01121112362"><i className="bi bi-whatsapp link-light"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
