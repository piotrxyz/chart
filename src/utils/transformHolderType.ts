export const transformHolderType = (
  holder: { type: 'eoa' | 'sc'; entity?: string },
  gnosisSafeAsEOA: boolean
): 'eoa' | 'sc' => {
  if (
    gnosisSafeAsEOA &&
    holder.type === 'sc' &&
    holder.entity === 'gnosisSafe'
  ) {
    return 'eoa'
  }
  return holder.type
}
