import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import DashboardContainer from '~/container/dashboard'
import MobileNav from '~/container/Navbar'
import { useLoaderData } from '@remix-run/react'

export const loader = async () => {
  const data = await fetch(
    'https://my-json-server.typicode.com/Delegasi-Tech/data-dummy/laporan_laba_rugi'
  )

  return data
}

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const data = useLoaderData()

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      background="gray.100"
    >
      <Box
        minWidth="375px"
        width={{ base: '100%', md: '380px' }}
        height="100vh"
        borderColor="gray.200"
        minHeight="200px"
        position="relative"
        bg="white"
      >
        <Box>
          <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}
          >
            <Flex
              flex={{ base: 1 }}
              ml={{ base: -2 }}
              display={{ base: 'flex' }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center' }}>
              <Box>
                <Image
                  src={
                    'https://uploads-ssl.webflow.com/62af9fefd2f730861971dce1/62afe5cb0139380cff95569e_logoMain.png'
                  }
                  height="30px"
                />
              </Box>
            </Flex>
            <Stack
              flex={{ base: 1 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}
            ></Stack>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
          <DashboardContainer data={data} />
        </Box>
      </Box>
    </Box>
  )
}
