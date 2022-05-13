import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Paragraph from '../../components/Paragraph'
import Container from '../../components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { getArtists } from '../../lib/api'


export async function getStaticProps(){
    const artists = await getArtists();
    console.log({artists});
    return{
        props:{
            artists
        }
    }
}

const ArtistsLandingPage = ({artists}) => {
    return <Layout>
        <Container>
        <Heading level="1">Artists</Heading>
        <Row>
            {artists.map((artist, index) => {
                const {title, slug, featuredImage} = artist.node;
                const {sourceUrl, altText, mediaDetails} = featuredImage.node;
                return <Col key={index} xs="6" sm="6">
                    <Image 
                        src={sourceUrl}
                        alt={altText}
                        width={mediaDetails.width}
                        height={mediaDetails.height}
                    />
                    <Heading level="3">
                        {artist.title}
                    </Heading>
                    <Paragraph>
                        <Link href={`/artists/${slug}`}>
                            <a>Read More</a>
                        </Link>
                    </Paragraph>
                </Col>
       
        })}
         </Row>
        </Container>
    </Layout>
}

export default ArtistsLandingPage;