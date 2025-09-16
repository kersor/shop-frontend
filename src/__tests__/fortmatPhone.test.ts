import { formatPhone } from "../scripts/utils/formatPhone"


describe("Валидация номера телефона", () => {
    it("Варианты заполнения номера", () => {
        expect(formatPhone("9999999999")).toBe("+7-(999)-999-99-99")
        expect(formatPhone("999999999")).toBe("+7-(999)-999-99-9")
        expect(formatPhone("99999999")).toBe("+7-(999)-999-99")
        expect(formatPhone("9999999")).toBe("+7-(999)-999-9")
        expect(formatPhone("999999")).toBe("+7-(999)-999")
        expect(formatPhone("99999")).toBe("+7-(999)-99")
        expect(formatPhone("9999")).toBe("+7-(999)-9")
        expect(formatPhone("999")).toBe("+7-(999")
        expect(formatPhone("99")).toBe("+7-(99")
        expect(formatPhone("9")).toBe("+7-(9")
    })

    it("Не валидное значение, буквы в параметре", () => {
        expect(formatPhone("q")).toBe("")
    })

    it("Не валидное значение, пустой параметр", () => {
        expect(formatPhone("")).toBe("")
    })
})