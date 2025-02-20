export const format = (currency: number) =>
  currency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
