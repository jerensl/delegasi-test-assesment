import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import type { IProfitLose } from '~/types/profit-lose';

interface ProfitLostTableProps {
  data: IProfitLose
}

const ProfitLostTable: React.FC<ProfitLostTableProps> = ({data}) => {
  return (
    <TableContainer overflowY="auto" paddingY="20px" maxHeight="300px">
    <Table variant='striped' paddingY="20px" size="sm" overflowY="hidden">
      <TableCaption>Laporan laba rugi </TableCaption>
      <Thead>
        <Tr>
          <Th>Pengeluaran</Th>
          <Th>Tanggal</Th>
          <Th isNumeric>Biaya</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.details?.map(({label, month, value}, index) => {
            return (
                <Tr key={index}>
                <Td>{label}</Td>
                <Td>{month}</Td>
                <Td isNumeric>Rp. {Intl.NumberFormat('id').format(value)}</Td>
              </Tr>
            )
        })}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Total pengeluaran</Th>
          <Th></Th>
          <Th isNumeric>Rp. {Intl.NumberFormat('id').format(data.details?.map(({value}) => value).reduce((acc, curr) => acc + curr, 0))}</Th>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
  );
}


export default ProfitLostTable