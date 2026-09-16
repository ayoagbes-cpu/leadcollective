export function formatGBP(amount: number) {
  return `£${amount.toLocaleString("en-GB")}`;
}

export function bundleTotal(itemCount: number, items: { price: number }[]) {
  if (itemCount < 3) return items.reduce((sum, i) => sum + i.price, 0);
  const sorted = [...items].sort((a, b) => a.price - b.price);
  let discounted = 0;
  sorted.forEach((item, i) => {
    const isDiscounted = (i + 1) % 3 === 0;
    discounted += isDiscounted ? item.price / 2 : item.price;
  });
  return Math.round(discounted * 100) / 100;
}
