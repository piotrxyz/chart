import { ProcessedHolder, ChartFilters } from '@/types/holder'
import { SMALL_BALANCE_THRESHOLD } from '@/constants/chart'

export const applyFilters = (
  holders: ProcessedHolder[],
  filters: ChartFilters
): ProcessedHolder[] => {
  let filteredHolders = holders

  if (filters.excludeSmallEOA) {
    filteredHolders = filteredHolders.filter(
      (holder) =>
        !(holder.type === 'eoa' && holder.balance < SMALL_BALANCE_THRESHOLD)
    )
  }

  return filteredHolders
}
