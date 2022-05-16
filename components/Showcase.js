import Section from './Section'
import Container from './Container';
import Row from './Row';
import Heading from './Heading'
import Paragraph from './Paragraph';
import Button from './Button'
import Col from './Col'
import Image from 'next/image'

const Showcase = () => {
    return <Section>
        <Container>
            <Row>
                <Col xs="4" md="3">
                    <Image 
                        src={`/images/led-zeppellin-ii.jpeg`}
                        alt="Led Zeppellin II"
                        width={300}
                        height={300}
                    />
                </Col>
                <Col xs="8" md="9" flexDirection="column" justifyContent="center">
                    <Heading marginBotton="1" level="1">Listening is everything</Heading>
                    <Paragraph marginBotton="1">Millions of songs and podcasts. No credit card needed</Paragraph>
                    <Button label="Get Spotify Free" type="primary" path="/downloads" />
                </Col>
            </Row>
        </Container>
    </Section>
}

export default Showcase;