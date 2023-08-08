import styled from 'styled-components/native';

interface ContainerProps {
  gap?: number;
}

export const Column = styled.View<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || 0}px;
`;

export const Row = styled.View<ContainerProps>`
  display: flex;
  flex-direction: row;
  gap: ${props => props.gap || 0}px;
`;

interface FontTextProps {
  size?: number;
  weight?: number;
  color?: string;
}

export const SuitText = styled.Text<FontTextProps>`
  font-family: 'SUIT Variable';
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || 16}px;
  color: ${props => props.color || 'black'};
`;

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f6fa;
`;

interface WrapperProps {
  padding?: number;
}
export const Wrapper = styled.View<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${props => props.padding || 0}px;
`;

interface GapProps {
  width?: number;
  height?: number;
}

export const Gap = styled.View<GapProps>`
  width: ${props => props.width || 0}px;
  height: ${props => props.height || 0}px;
`;
