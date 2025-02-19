import { ProgressBarContainer, StyledProgressBar } from "./styles";

interface ProgressBarProps {
  progress: number;
  total: number;
  $width: string;
}

function ProgressBar({ progress, total, $width }: ProgressBarProps) {
  const percentage = (progress / total) * 100;
  return (
    <ProgressBarContainer $width={$width}>
      <StyledProgressBar progress={percentage} />
    </ProgressBarContainer>
  );
}

export default ProgressBar;
