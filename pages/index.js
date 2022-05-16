import Head from 'next/head'
import TracksByGenre from '../components/TracksByGenre'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import NewReleases from '../components/NewReleases'

import { getAlbums } from '../lib/api'


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const albums = await getAlbums();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
        albums
    }
  }
}

export default function Home({albums}) {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a summary of my website" />
      </Head>
      <Showcase />
      <NewReleases items={albums}/>

        <TracksByGenre items={albums}/>
    </Layout>
  )
}
