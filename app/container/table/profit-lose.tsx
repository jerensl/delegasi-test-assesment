import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  chakra,
} from '@chakra-ui/react'
import type { IProfitLose, IProfitAndLoseTableHead } from '~/types/profit-lose'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import type { SortingState } from '@tanstack/react-table'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  createColumnHelper,
} from '@tanstack/react-table'
import React from 'react'

interface ProfitLostTableProps {
  data: IProfitLose
}

const columnHelper = createColumnHelper<IProfitAndLoseTableHead>()

const columns = [
  columnHelper.accessor('label', {
    cell: (info) => info.getValue(),
    header: 'Keuntungan & Kerugian',
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

const ProfitLostTable: React.FC<ProfitLostTableProps> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const table = useReactTable({
    columns,
    data: data.details,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <TableContainer overflowY="scroll" paddingY="20px" maxHeight="400px">
      <Table variant="simple" paddingY="20px" size="sm" overflowY="hidden">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                const meta: any = header.column.columnDef.meta
                return (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    isNumeric={meta?.isNumeric}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    <chakra.span pl="4">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                )
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                const meta: any = cell.column.columnDef.meta
                return (
                  <Td key={cell.id} isNumeric={meta?.isNumeric}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                )
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default ProfitLostTable
