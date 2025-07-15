interface Holder {
  balance: string
  type: 'eoa' | 'sc'
  entity?: string
  proportionStr?: string
  displayName?: string
}

interface HolderData {
  singleChainTotalSupply: string
  multichainTotalSupplyEstimate: string
  holdersData: Record<string, Holder>
}

export interface ApiDataEntry {
  timestamp: string
  holderData: HolderData
}

export interface ApiResponse {
  data: ApiDataEntry[]
}

export interface ProcessedHolder {
  address: string
  balance: number
  type: 'eoa' | 'sc'
  entity?: string
}

export interface ChartData {
  name: string
  value: number
  color: string
}

export interface ChartFilters {
  excludeSmallEOA: boolean
  gnosisSafeAsEOA: boolean
}

export interface ProcessedData {
  chartData: ChartData[]
  totalBalance: number
  processedHolders: ProcessedHolder[]
}
