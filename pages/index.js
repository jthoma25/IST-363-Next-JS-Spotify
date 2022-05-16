import Head from 'next/head'
import TracksByGenre from '../components/TracksByGenre'
import Layout from '../components/Layout'
import Row from '../components/Row'
import Container from '../components/Container'
import Col from '../components/Col'

import { getTracks } from '../lib/api'


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const tracks = await getTracks();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
        tracks
    }
  }
}

export default function Home({tracks}) {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a summary of my website" />
      </Head>
      <section>
        <Container>
          <Row>
            <Col sm="6" md="4" lg="3">Col1</Col>
            <Col sm="6" md="4" lg="3">Col2</Col>
            <Col sm="6" md="4" lg="3">Col3</Col>
            <Col sm="6" md="4" lg="3">Col3</Col>
          </Row>
        </Container>
      </section>
        

        <TracksByGenre items={tracks}/>
    </Layout>
  )
}
