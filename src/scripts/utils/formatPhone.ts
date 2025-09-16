export function formatPhone(raw: string) {
// Оставляем только цифры
    let digits = raw.replace(/\D/g, "");

    if (!digits.length) return ""

    // Игнорируем первую 7, так как +7 уже префикс
    if (digits.startsWith("7")) digits = digits.substring(1);

    if (!digits) return "";

    let formatted = "+7";

    if (digits.length > 0) {
      formatted += "-(" + digits.substring(0, 3);
    }
    if (digits.length >= 4) {
      formatted += ")-" + digits.substring(3, 6);
    }
    if (digits.length >= 7) {
      formatted += "-" + digits.substring(6, 8);
    }
    if (digits.length >= 9) {
      formatted += "-" + digits.substring(8, 10);
    }

    return formatted;
}
