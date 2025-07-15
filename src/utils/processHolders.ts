import {
  ApiDataEntry,
  ProcessedHolder,
  ChartFilters,
  ProcessedData
} from '@/types/holder'
import { applyFilters } from './applyFilters'
import { transformHolderType } from './transformHolderType'
import { calculateBalancesByType } from './calculateBalancesByType'
import { generateChartData } from './generateChartData'

export const processHolders = (
  apiData: ApiDataEntry,
  filters: ChartFilters
): ProcessedData => {
  const holders = Object.entries(apiData.holderData.holdersData)

  let processedHolders: ProcessedHolder[] = holders.map(([address, holder]) => {
    const cleanAddress = address.replace('ethereum:', '')
    const effectiveType = transformHolderType(holder, filters.gnosisSafeAsEOA)

    return {
      address: cleanAddress,
      balance: parseFloat(holder.balance),
      type: effectiveType,
      entity: holder.entity
    }
  })

  processedHolders = applyFilters(processedHolders, filters)

  const { eoaTotal, scTotal } = calculateBalancesByType(processedHolders)
  const totalBalance = eoaTotal + scTotal
  const chartData = generateChartData(eoaTotal, scTotal)

  return {
    chartData,
    totalBalance,
    processedHolders
  }
}
