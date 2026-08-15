export function scrollToElement(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function formatPrice(price: number, currency = "₽"): string {
  return `${price.toLocaleString("ru-RU")} ${currency}`;
}
