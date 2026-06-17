export const formatPrice = (number: number): string => {
    return number.toLocaleString("ru-RU") + ' ₽'
}