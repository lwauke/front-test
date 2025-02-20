import styled from "styled-components";

interface FlexboxProps {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  wrap?: "wrap" | "nowrap";
  grow?: number;
}

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  flex-grow: ${({ grow }) => grow || 0};
`;
