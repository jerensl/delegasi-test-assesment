export interface IProfitLose {
  label: string
  month: string
  value: number
  details: Array<IProfitLose>
}

export type IProfitAndLoseTableHead = IProfitLose
