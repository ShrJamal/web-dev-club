export function invariant(
  condition: any,
  message: string | (() => string) = 'Invariant failed',
): asserts condition {
  if (condition) return
  if (process.env.NODE_ENV === 'production') throw new Error('Invariant failed')
  throw new Error(typeof message === 'function' ? message() : message)
}
