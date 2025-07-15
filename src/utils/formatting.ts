export const formatBalance = (balance: number): string => {
  return balance.toLocaleString('en-US', {
    maximumFractionDigits: 0
  })
}

export const formatTimestamp = (timestamp: string): string => {
  try {
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    return timestamp
  }
}
