import {validateEmail} from '../scripts/utils/validateEmail'

describe("Валидация Email", () => {
    it("Положительный результат", () => {
        expect(validateEmail("mail@mail.ru")).toBe(true)
    })
    it("Не ввалиден. 1 символ", () => {
        expect(validateEmail("@")).toBe(false)
    })
    it("Не ввалиден. Пустое значение", () => {
        expect(validateEmail("")).toBe(false)
    })
})