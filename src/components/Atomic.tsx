import styled from 'styled-components/native';
export const Column = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

interface IFontTextProps {
  fontSize?: number;
  fontWeight?: number;
}

export const SuitText = styled.Text<IFontTextProps>`
  font-family: 'SUIT Variable';
  font-weight: ${props => props.fontWeight || 400};
  font-size: ${props => props.fontSize || 16}px;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f6fa;
`;
