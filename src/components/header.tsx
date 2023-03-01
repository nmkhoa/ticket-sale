import NextLink from "next/link"
import { Flex, Button, useColorModeValue, Center, Spacer, Heading, LinkBox, LinkOverlay, Input, IconButton,ButtonGroup } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'



const siteTitle="Ticket NFT"
export default function Header() {

  return (
    <div >
      <div>
        <Flex as='header' bg={useColorModeValue('gray.100', 'gray.900')} p={3} alignItems='center'>
      <LinkBox>
        <NextLink href={'/'} passHref>
          <LinkOverlay>
            <Heading size="md" ml="50px" color='#6CB3A7' fontSize='30px'>{siteTitle}</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>      
      <Spacer />
      <Input focusBorderColor='#6CB3A7'  boxShadow='2xl' placeholder='Search....' _placeholder={{ color: '#6CB3A7' }} w='500px'  />
      <IconButton boxShadow='2xl' bg="#6CB3A7" ml="10px" aria-label='Search database' icon={<Search2Icon />} />
      <Spacer />
      <Button mr='20px' borderRightRadius="20" borderLeftRadius="20" color="black" borderColor="#6CB3A7" variant='outline' w='150px' >Tạo Sự Kiện</Button>
      
      <ButtonGroup gap='2'>
      <Button bg="#6CB3A7" color="black" >Đăng Ký</Button>
      <Button bg="#6CB3A7" color="black" >Đăng Nhập</Button>
      </ButtonGroup>
      </Flex>
      </div>
      <div >
      <Center bg={useColorModeValue('gray.100', 'gray.900')} p={0}>
      <Flex  >
        
        <Button  mr='20px' color="#6CB3A7" bg={useColorModeValue('gray.100', 'gray.900')}>Trang chủ</Button>
        <Spacer/>
        <Button color="#6CB3A7" bg={useColorModeValue('gray.100', 'gray.900')} >Sự kiện</Button>
        
      </Flex>
      </Center>
      </div>
    </div>
    
    
  )
}