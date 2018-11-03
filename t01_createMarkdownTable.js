var table = require('markdown-table')

const tab = table([
  ['Branch', 'Commit'],
  ['master', '0123456789abcdef'],
  ['staging', 'fedcba9876543210']
])

console.log(tab)