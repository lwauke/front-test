import styled from "styled-components";

export const ProgressBarContainer = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  height: 8px;
  background: #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  background: #1bc681;
  border-radius: 10px;
  border-radius: 10px;
  width: ${(props) => props.progress}%;
`;

export const ProgressBarLabel = styled.span`
  font-size: 14px;
  color: #333;
  margin-top: 5px;
`;
