import { ProcessedHolder } from '@/types/holder'

export const calculateBalancesByType = (holders: ProcessedHolder[]) => {
  const eoaTotal = holders
    .filter((holder) => holder.type === 'eoa')
    .reduce((sum, holder) => sum + holder.balance, 0)

  const scTotal = holders
    .filter((holder) => holder.type === 'sc')
    .reduce((sum, holder) => sum + holder.balance, 0)

  return { eoaTotal, scTotal }
}
