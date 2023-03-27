import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import FiberTest from '../fiber-test'

const LazyVoxelDog = dynamic(() => import('../fiber-test'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="xeromoses's homepage" />
        <meta name="author" content="xeromoses" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="xeromoses" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@xeromoses" />
        <meta name="twitter:creator" content="@xeromoses" />
        <meta property="og:site_name" content="xeromoses" />
        <meta name="og:title" content="xeromoses" />
        <meta property="og:type" content="website" />
        <title>Xeromoses - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
