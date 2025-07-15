import { fetchHolderData } from '@/actions/fetchHolderData'
import ClientChart from '@/components/ClientChart'

export default async function Home() {
  const result = await fetchHolderData()

  if (result.error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-base sm:text-lg font-medium mb-2">
            Error
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            {result.error}
          </div>
        </div>
      </div>
    )
  }

  if (!result.data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-gray-500 text-base sm:text-lg">
            No data available
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900">
          Stablewatch Holder Type Proportion Chart
        </h1>

        <ClientChart initialData={result.data} />
      </div>
    </div>
  )
}
