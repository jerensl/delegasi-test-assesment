import { ChevronDownIcon, ChevronRightIcon, Icon } from '@chakra-ui/icons'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import type { IProfitAndLoseTableHead, IProfitLose } from '~/types/profit-lose'
import ProfitLostTable from '../table/finance'

interface ProfitLoseContainerProps {
  data: IProfitLose
}

const columnHelper = createColumnHelper<IProfitAndLoseTableHead>()

const columns = [
  columnHelper.accessor('label', {
    cell: ({ row, getValue }) => (
      <Box paddingLeft={`${row.depth * 8}`}>
        {row.getCanExpand() ? (
          <button
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: 'pointer' },
            }}
          >
            {row.getIsExpanded() ? (
              <ChevronDownIcon boxSize={4} marginRight="2" />
            ) : (
              <ChevronRightIcon boxSize={4} marginRight="2" />
            )}
            {getValue()}
          </button>
        ) : (
          <>
            <Icon viewBox="0 0 200 200" color="green.500" marginRight="3">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            {getValue()}
          </>
        )}
      </Box>
    ),
    header: 'Laba & Rugi',
    meta: {
      isExpand: false,
    },
  }),
  columnHelper.accessor('month', {
    cell: (info) => info.getValue(),
    header: 'Tanggal',
  }),
  columnHelper.accessor('value', {
    cell: (info) => {
      const value = `Rp. ${Intl.NumberFormat('id').format(info.getValue())}`
      return value
    },
    header: 'Biaya',
    meta: {
      isNumeric: true,
    },
  }),
]

const ProfitLoseContainer: React.FC<ProfitLoseContainerProps> = ({ data }) => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100%">
      <Box width={{ base: '100%', md: '380px' }} padding="2">
        <Heading as="h2" size="md" alignItems="stretch" textAlign="center">
          Laporan Laba Rugi
        </Heading>
        <ProfitLostTable data={data} columns={columns} />
      </Box>
    </Flex>
  )
}

export default ProfitLoseContainer
