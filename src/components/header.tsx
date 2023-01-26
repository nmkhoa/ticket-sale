import NextLink from "next/link"
import { Flex, Button, useColorModeValue, Spacer, Heading, LinkBox, LinkOverlay, Input } from "@chakra-ui/react"

const siteTitle="Ticket NFT"
export default function Header() {

  return (
    <Flex as='header' bg={useColorModeValue('gray.100', 'gray.900')} p={4} alignItems='center'>
      <LinkBox>
        <NextLink href={'/'} passHref>
          <LinkOverlay>
            <Heading size="md" ml="50px">{siteTitle}</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>      
      <Spacer />
       {/* <Input
      borderColor = "black"
      
      width = "500px"
      color='black'
      placeholder='Tìm Kiếm'
      _placeholder={{ color: 'inherit' }}
      />
      <Button  borderColor = "black" colorScheme='blue' variant='outline' > Tìm Kiếm </Button>  */}
      <Button >Button for Account </Button>
    </Flex>
  )
}