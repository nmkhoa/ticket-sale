// src/pages/index.tsx
import type { NextPage } from "next"
import Head from "next/head"
import NextLink from "next/link"
import ConnectMetamask from "../components/connectMetamask"
import ETHBalance from "../components/ETHBalance"
import ETHBalanceSWR from "../components/ETHBalanceSWR"
import CreateCompany from "../components/CreateCompany"
import CreateEvent from "../components/CreateEvent"
import CreateBuyTicket from "../components/BuyTicket"
import CreateBurnTicket from "../components/BurnTicket"
import CreateReSaleTicket from "../components/ReSaleTicket"
import CreateReBuyTicket from "../components/BuyReSaleTicket"
import { VStack, Heading, Box, LinkOverlay, LinkBox} from "@chakra-ui/layout"
import { Text, Button,Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Nhap from "../components/nhap";
const addressContract='0x5fbdb2315678afecb367f032d93f642f64180aa3'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My DAPP</title>
      </Head>

      <Heading as="h3"  my={4}>Ticket Sale</Heading>   
      <Tabs size='md' variant='enclosed'>
  <TabList>
    <Tab>Đăng Nhập</Tab>
    <Tab>Admin</Tab>
    <Tab>Tạo Sự Kiện</Tab>
    <Tab>Mua vé</Tab>
    <Tab>Check In</Tab>
    <Tab> Bán Lại Vé </Tab>
    <Tab>Mua Lại Vé</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <ConnectMetamask />       
      <VStack>
      <Box  mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>ETH Balance</Heading>
          <ETHBalance />
        </Box>

        <Box  mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>ETH Balance <b>using SWR</b></Heading>
          <ETHBalanceSWR />
        </Box>

        <LinkBox  my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <NextLink href="https://github.com/NoahZinsmeister/web3-react/tree/v6" passHref>
          <LinkOverlay>
            <Heading my={4} fontSize='xl'>Task 3 with link</Heading>
            <Text>Read docs of Web3-React V6</Text>
          </LinkOverlay>
          </NextLink>
        </LinkBox>
      </VStack>
    </TabPanel>
    <TabPanel>
    <CreateCompany addressContract={addressContract} />
    </TabPanel>
    <TabPanel>
    <CreateEvent addressContract={addressContract} />
    </TabPanel>
    <TabPanel>
    <CreateBuyTicket addressContract={addressContract} />
    </TabPanel>
    <TabPanel>
    <CreateBurnTicket addressContract={addressContract} />
    </TabPanel>
    <TabPanel>
    <CreateReSaleTicket addressContract={addressContract}/>
    </TabPanel>
    <TabPanel>
    <CreateReBuyTicket addressContract={addressContract}/>
    </TabPanel>
  </TabPanels>
</Tabs>
      
    </>
  )
}

export default Home