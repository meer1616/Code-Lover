import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import { kontest } from '../types/kontest'
import styles from '../styles/Home.module.css'
import axios from "axios"
import { useState } from 'react'
import Link from 'next/link'
import { Box, Flex } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SingleData from '../components/SingleData'

const Home: React.FC<{ data: kontest[] }> = ({ data }) => {

  const [domainNameText, setDomainNameText] = useState<string>("all")

  console.log(domainNameText);

  return (
    <Box className={styles.container} >
      <Head>
        <title>Kompete</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Tabs variant='unstyled' border="1px">
          <TabList border="1px">
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('all')}>All</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('hacker_rank')}>Hacker Rank</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('hacker_earth')}>Hacker Earth</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('at_coder')}>At Coder</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('code_chef')}>Code Chef</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('leet_code')}>Leet Code</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('kick_start')}>Kick Start</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('codeforces')}>CodeForces</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() => setDomainNameText('top_coder')}>TopCoder</Tab>
          </TabList>
          <TabPanels >
            {/* <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel> */}
            <SingleData data={data} text={domainNameText} />
            {/* </Flex> */}
          </TabPanels>

        </Tabs>

      </Box>

    </Box>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://kontests.net/api/v1/all')
  const data = await res.json()

  // console.log(data);

  return {
    props: {
      data
    }
  }

}