import { checkDigit } from "./checkDigit.js"

export function formatDate () { 
  let date = new Date()
  return `${date.getFullYear()}-${checkDigit(date.getMonth() + 1)}-${checkDigit(date.getDate())}`
}



