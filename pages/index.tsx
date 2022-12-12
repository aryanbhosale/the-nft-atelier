import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import { useWallet } from '@solana/wallet-adapter-react'
import NavBar from "../components/Navbar"
import Disconnected from '../components/Disconnected'
import Connected from '../components/Connected'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const { connected } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>The NFT Atelier</title>
        <meta name="description" content="Instant gratification for NFT collectors" /> {/* OpenAI ChatGPT ---> Write me short and aesthetic headings in the style of Apple of a website that does the following:\nAn NFT collection that mints NFTs superfast */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
					<NavBar />

          <Spacer />
          <Center>
            {connected ? <Connected /> : <Disconnected />}
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://github.com/aryanbhosale"
                target="_blank"
                rel="noopener noreferrer"
              >
                made with ❤️ by Aryan Bhosale
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
