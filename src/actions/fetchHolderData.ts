'use server'

import { ApiResponse, ApiDataEntry } from '@/types/holder'

export const fetchHolderData = async (): Promise<{
  data: ApiDataEntry | null
  error: string | null
}> => {
  try {
    const apiUrl = process.env.API_URL

    if (!apiUrl) {
      throw new Error('API_URL environment variable is not set')
    }

    const response = await fetch(apiUrl, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse = await response.json()

    if (!result.data || result.data.length === 0) {
      throw new Error('No data received from API')
    }

    return {
      data: result.data[0],
      error: null
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Failed to fetch data'
    return {
      data: null,
      error: errorMessage
    }
  }
}
