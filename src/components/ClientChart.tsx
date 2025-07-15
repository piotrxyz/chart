'use client'

import { useState, useMemo, useCallback } from 'react'
import { HolderChart } from './HolderChart'
import { ChartControls } from './ChartControls'
import DataQualityAnalysis from './DataQualityAnalysis'
import { processHolders } from '@/utils/processHolders'
import { ChartFilters, ApiDataEntry } from '@/types/holder'

interface ClientChartProps {
  initialData: ApiDataEntry
}

export default function ClientChart({ initialData }: ClientChartProps) {
  const [filters, setFilters] = useState<ChartFilters>({
    excludeSmallEOA: false,
    gnosisSafeAsEOA: false
  })

  const processedData = useMemo(() => {
    return processHolders(initialData, filters)
  }, [initialData, filters])

  const handleFiltersChange = useCallback((newFilters: ChartFilters) => {
    setFilters(newFilters)
  }, [])

  return (
    <div className="space-y-6">
      <ChartControls filters={filters} onFiltersChange={handleFiltersChange} />

      <HolderChart
        chartData={processedData.chartData}
        totalBalance={processedData.totalBalance}
        timestamp={initialData.timestamp}
      />

      <DataQualityAnalysis />
    </div>
  )
}