export const validateEmail = (email: string) => {
    const isEmail = email.split('').find((word: string) => word === "@")
    return isEmail === "@" ? true : false
}