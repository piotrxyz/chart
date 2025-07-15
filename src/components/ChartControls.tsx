import { memo } from 'react'
import { ChartFilters } from '@/types/holder'

interface ChartControlsProps {
  filters: ChartFilters
  onFiltersChange: (filters: ChartFilters) => void
}

export const ChartControls = memo(
  ({ filters, onFiltersChange }: ChartControlsProps) => {
    const handleExcludeSmallEOAChange = (checked: boolean) => {
      onFiltersChange({
        ...filters,
        excludeSmallEOA: checked
      })
    }

    const handleGnosisSafeChange = (checked: boolean) => {
      onFiltersChange({
        ...filters,
        gnosisSafeAsEOA: checked
      })
    }

    return (
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Filter Options
        </h2>

        <div className="space-y-4 sm:space-y-3">
          <div className="flex items-start sm:items-center space-x-3">
            <input
              type="checkbox"
              id="excludeSmallEOA"
              checked={filters.excludeSmallEOA}
              onChange={(e) => handleExcludeSmallEOAChange(e.target.checked)}
              className="w-4 h-4 mt-0.5 sm:mt-0 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="excludeSmallEOA"
              className="text-sm sm:text-base font-medium text-gray-900 leading-tight"
            >
              Exclude small EOA balances
            </label>
          </div>

          <div className="flex items-start sm:items-center space-x-3">
            <input
              type="checkbox"
              id="gnosisSafeAsEOA"
              checked={filters.gnosisSafeAsEOA}
              onChange={(e) => handleGnosisSafeChange(e.target.checked)}
              className="w-4 h-4 mt-0.5 sm:mt-0 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="gnosisSafeAsEOA"
              className="text-sm sm:text-base font-medium text-gray-900 leading-tight"
            >
              Consider Gnosis Safe as EOA
            </label>
          </div>
        </div>
      </div>
    )
  }
)

ChartControls.displayName = 'ChartControls'
