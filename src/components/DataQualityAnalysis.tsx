export default function DataQualityAnalysis() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Data Quality Correction Task
      </h3>

      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Question:</span> What is the Ethereum
          address of the holder with the largest balance of sUSDf that is
          missing from holdersData?
        </p>

        <div className="bg-white border border-gray-200 rounded p-3">
          <p className="text-sm font-medium text-gray-900 mb-1">Answer:</p>
          <p className="font-mono text-sm text-blue-600 break-all">
            0xf78e5799fc2b397fe5add625f7b45c13cdb5f5ae
          </p>
        </div>
      </div>
    </div>
  )
}
