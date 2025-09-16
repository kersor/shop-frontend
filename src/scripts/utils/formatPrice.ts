export const formatPrice = (number: string) => {
    if (isNaN(Number(number)) || !number.length) return false
    
    const num = 
    number
    .split("")
    .reverse()
    .join("")
    .replace(/(\d{3})(?=\d)/g, '$1 ')
    .split("")
    .reverse()
    .join('')
               
    return `${num} ₽`
}