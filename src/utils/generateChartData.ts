import { ChartData } from '@/types/holder'
import { CHART_COLORS } from '@/constants/chart'

export const generateChartData = (
  eoaTotal: number,
  scTotal: number
): ChartData[] => {
  const chartData: ChartData[] = [
    { name: 'EOA', value: eoaTotal, color: CHART_COLORS.eoa },
    { name: 'Smart Contract', value: scTotal, color: CHART_COLORS.sc }
  ]

  return chartData.filter((item) => item.value > 0)
}
