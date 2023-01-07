import { Box, Flex } from '@chakra-ui/react';
import type { IProfitLose } from '~/types/profit-lose';
import ProfitLostTable from '../table/profit-lose';

interface DashboardContainerProps {
  data: IProfitLose
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({data}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="100%"
    >
         <Box width={{ base: '100%', md: '380px' }}>
            <ProfitLostTable data={data}/>
          </Box>
    </Flex>
  );
}


export default DashboardContainer