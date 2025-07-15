import { memo, useCallback } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  TooltipProps
} from 'recharts'
import { ChartData } from '@/types/holder'
import { formatBalance, formatTimestamp } from '@/utils/formatting'
import { useScreenSize } from '@/hooks/useScreenSize'

interface HolderChartProps {
  chartData: ChartData[]
  totalBalance: number
  timestamp: string
}

export const HolderChart = memo(
  ({ chartData, totalBalance, timestamp }: HolderChartProps) => {
    const screenSize = useScreenSize()

    const renderLabel = useCallback(
      ({ name, percent }: { name: string; percent: number }) => {
        if (screenSize === 'sm') {
          return `${(percent * 100).toFixed(1)}%`
        }

        if (screenSize === 'md') {
          const shortName = name === 'Smart Contract' ? 'SC' : name
          return `${shortName} ${(percent * 100).toFixed(1)}%`
        }

        return `${name} ${(percent * 100).toFixed(1)}%`
      },
      [screenSize]
    )
    if (chartData.length === 0) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <div className="text-center text-gray-500 py-8">
            No data available with current filters
          </div>
        </div>
      )
    }

    return (
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-600">
              Timestamp: {formatTimestamp(timestamp)}
            </p>
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              Total Balance: {formatBalance(totalBalance)}
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <ResponsiveContainer
            width="100%"
            height={300}
            className="sm:!h-[350px] lg:!h-[400px]"
          >
            <PieChart
              key={`chart-${chartData.length}-${totalBalance}`}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <Pie
                key={`pie-${chartData.length}-${chartData.map((d) => d.value).join('-')}`}
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderLabel}
                outerRadius="60%"
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={renderCustomTooltip} />
              <Legend
                wrapperStyle={{
                  fontSize: '12px',
                  paddingTop: '10px'
                }}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
)

HolderChart.displayName = 'HolderChart'

const renderCustomTooltip = (props: TooltipProps<number, string>) => {
  const { active, payload } = props
  if (active && payload && payload.length) {
    const data = payload[0].payload as ChartData
    return (
      <div className="bg-white p-3 border border-gray-300 rounded shadow-lg max-w-xs">
        <p className="font-semibold">{data.name}</p>
        <p className="text-sm text-gray-600">
          Balance: {formatBalance(data.value)}
        </p>
      </div>
    )
  }
  return null
}
