import { Box, Flex, Heading } from '@chakra-ui/react'
import type { IProfitLose } from '~/types/profit-lose'
import ProfitLostTable from '../table/profit-lose'

interface ProfitLoseContainerProps {
  data: IProfitLose
}

const ProfitLoseContainer: React.FC<ProfitLoseContainerProps> = ({ data }) => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100%">
      <Box width={{ base: '100%', md: '380px' }} padding="2">
        <Heading as="h2" size="md" alignItems="stretch" textAlign="center">
          Laporan Laba Rugi
        </Heading>
        <ProfitLostTable data={data} />
      </Box>
    </Flex>
  )
}

export default ProfitLoseContainer
