export const validateEmail = (email: string) => {
    if (email.length <= 1) return false
    const isEmail = email.split('').find((word: string) => word === "@")
    return isEmail === "@" ? true : false
}