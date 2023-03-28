import styled from 'styled-components';

 interface FlexBoxProps {
  justifyContent: string | null;
  flexDirection?: string | null;
  alignItems?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

export const FlexBox = styled.div<FlexBoxProps> `
  display: flex;
  flex-shrink: 10;
  justify-content ${({ justifyContent }) => justifyContent ? justifyContent : null};
  flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : null};
  align-items: ${({ alignItems }) => alignItems ? alignItems : null};
  width: ${({ width }) => width ? width : "100%"};
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : ""};
  height: ${({ height }) => height ? height : ""};
  margin: ${({ margin }) => margin ? margin : ""};
  padding: ${({ padding }) => padding ? padding : ""};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : ""};
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : ""};
  box-sizing: border-box;
`