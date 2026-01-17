export function checkDigit (value) {
  const convertedNumber = value.toString()
  return convertedNumber.length > 1 ? value : `0${value}`
}