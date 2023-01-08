import { Box, Flex, Text } from '@chakra-ui/react'
import type { IProfitLose } from '~/types/profit-lose'
import Stats from '../Stats'

interface DashboardContainerProps {
  data: IProfitLose
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({ data }) => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100%">
      <Box width={{ base: '100%', md: '380px' }} padding="2" gap="2">
        <Text fontSize="2xl" as="b">
          Hello, Bob
        </Text>
        <Text fontSize="md">Welcome Back !</Text>
        <Stats
          label={data.details[0].label}
          amount={data.details[0].value}
          date={data.details[0].month}
        />
      </Box>
    </Flex>
  )
}

export default DashboardContainer
