import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders the progress bar with the correct width", () => {
    const progress = 50;
    const total = 100;
    const width = "200px";
    render(<ProgressBar progress={progress} total={total} width={width} />);

    const progressBarContainer = screen.getByTestId("progress-bar-container");
    const progressBar = screen.getByTestId("progress-bar");

    expect(progressBarContainer).toBeInTheDocument();
    expect(progressBarContainer).toHaveStyle(`width: ${width}`);

    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle(`width: ${progress}%`);
  });
});
