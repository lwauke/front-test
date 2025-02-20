import { format } from "./currency";

describe("format", () => {
  it("should format currency correctly", () => {
    const currency = 1000;
    const formattedCurrency = format(currency);
    expect(formattedCurrency).toMatch(/^R\$\s1\.000,00$/);
  });

  it("should format zero currency correctly", () => {
    const currency = 0;
    const formattedCurrency = format(currency);
    expect(formattedCurrency).toMatch(/^R\$\s0,00$/);
  });

  it("should format negative currency correctly", () => {
    const currency = -1000;
    const formattedCurrency = format(currency);
    expect(formattedCurrency).toMatch(/^-R\$\s1\.000,00$/);
  });
});
