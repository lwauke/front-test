import { ProgressBarContainer, StyledProgressBar } from "./styles";

interface ProgressBarProps {
  progress: number;
  total: number;
  width: string;
}

function ProgressBar({ progress, total, width }: ProgressBarProps) {
  const percentage = (progress / total) * 100;
  return (
    <ProgressBarContainer
      width={width}
      data-testid="progress-bar-container"
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={percentage}
    >
      <StyledProgressBar progress={percentage} data-testid="progress-bar" />
    </ProgressBarContainer>
  );
}

export default ProgressBar;
