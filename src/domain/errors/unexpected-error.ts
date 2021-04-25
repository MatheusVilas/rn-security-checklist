export default class UnexpectedError extends Error {
  constructor() {
    super('Somenthing happens. Please try again.')
    this.name = 'UnexpectedError'
  }
}
