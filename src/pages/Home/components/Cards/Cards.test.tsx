import { render, screen } from "@testing-library/react";
import Cards from "./Cards";

describe("Cards", () => {
  it("renders the card details correctly", () => {
    render(<Cards limit={3000} bill={300} />);

    expect(screen.getByText("Cartões")).toBeInTheDocument();
    expect(screen.getByText("Tide Cardoso")).toBeInTheDocument();
    expect(screen.getByText("Última compra")).toBeInTheDocument();
    expect(screen.getByText("Bazar Mituzi")).toBeInTheDocument();
    expect(screen.getByText("Limite mensal:")).toBeInTheDocument();
  });

  it("renders the progress bar correctly", () => {
    render(<Cards limit={3000} bill={300} />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(
      screen.getByText(/R\$\s3.00,00\s+|\s+R\$\s3.000,00/),
    ).toBeInTheDocument();
  });

  it("renders the 'Mais detalhes' button", () => {
    render(<Cards limit={3000} bill={300} />);

    expect(screen.getByText("Mais detalhes")).toBeInTheDocument();
  });
});
