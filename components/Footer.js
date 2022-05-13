import Col from "./Col";
import Container from "./Container";
import Row from "./Row";
import Nav from "./Nav";

import styles from './footer.module.scss'
import Logo from "./Logo";

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            <Row alignItems="center">
                <Col xs="3" sm="3">
                    <Logo />
                </Col>
                <Col sm="9">
                    <Nav />
                </Col>
            </Row>
            
        </Container>
        </footer>
}

export default Footer;