import { Box, Flex, Heading } from '@chakra-ui/react'

const DashboardContainer: React.FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100%">
      <Box width={{ base: '100%', md: '380px' }} padding="2"></Box>
    </Flex>
  )
}

export default DashboardContainer
