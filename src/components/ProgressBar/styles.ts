import styled from "styled-components";
import { theme } from "@/styles/theme";

export const ProgressBarContainer = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 8px;
  background: ${theme.colors.lighterGray};
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  background: ${theme.colors.primary};
  border-radius: 10px;
  width: ${(props) => props.progress}%;
`;
