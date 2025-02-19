import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders the card component with a custom HTML element", () => {
    const children = "Test Children";
    const customElement = "section";
    render(<Card as={customElement}>{children}</Card>);

    const cardElement = screen.getByText(children);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement.tagName.toLowerCase()).toBe(customElement);
  });
});
