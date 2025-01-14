import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  chakra,
  Tfoot,
} from '@chakra-ui/react'
import type { IProfitLose } from '~/types/profit-lose'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import type {
  ExpandedState,
  SortingState,
  ColumnDef,
} from '@tanstack/react-table'
import { getExpandedRowModel } from '@tanstack/react-table'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'
import React from 'react'

interface ProfitLostTableProps {
  data: IProfitLose
  columns: Array<ColumnDef<IProfitLose, any>>
  withTotal: boolean
}

const ProfitLostTable: React.FC<ProfitLostTableProps> = ({
  data,
  columns,
  withTotal,
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [expanded, setExpanded] = React.useState<ExpandedState>({})

  const table = useReactTable({
    columns: columns,
    data: data.details,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSubRows: (row) => row.details,
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      expanded,
    },
  })

  return (
    <TableContainer overflowY="scroll" paddingY="20px" maxHeight="450px">
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

        {withTotal && (
          <Tfoot>
            <Tr>
              <Th>Total {data.label}</Th>
              <Th></Th>
              <Th isNumeric>
                Rp.{' '}
                {Intl.NumberFormat('id').format(
                  data.details
                    ?.map(({ value }) => value)
                    .reduce((acc, curr) => acc + curr, 0)
                )}
              </Th>
            </Tr>
          </Tfoot>
        )}
      </Table>
    </TableContainer>
  )
}

export default ProfitLostTable
