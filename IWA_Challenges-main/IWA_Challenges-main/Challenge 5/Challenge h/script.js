const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

// Changing the 'O' in primaryPhone to '0'
const correctPrimaryPhone = primaryPhone.replace(/^O/, '0')

// Checking if both phone numbers only have numbers
const primaryValid = /^\d+$/.test(correctPrimaryPhone)
const secondaryValid = /^\d+$/.test(correctPrimaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)