import { formatPrice } from "../scripts/utils/formatPrice"

describe("Форматирование цены", () => {
    it("Валидное значение", () => {
        expect(formatPrice("123")).toBe("123 ₽")
    })
    it("Валидное значение, с остатком", () => {
        expect(formatPrice("123.12")).toBe("123.12 ₽")
    })
    it("Валидное значение, больше 3 цифр v1", () => {
        expect(formatPrice("1234")).toBe("1 234 ₽")
    })
    it("Валидное значение, больше 3 цифр v2", () => {
        expect(formatPrice("1234567")).toBe("1 234 567 ₽")
    })
    it("Не валидное значение, пустое значение", () => {
        expect(formatPrice("")).toBe(false)
    })
    it("Не валидное значение, в параметрах буквы", () => {
        expect(formatPrice("21w21w")).toBe(false)
    })
})