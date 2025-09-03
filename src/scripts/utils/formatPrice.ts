export const formatPrice = (number: string) => {
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