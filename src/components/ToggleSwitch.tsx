import React from 'react';
import styled from 'styled-components/native';

interface ToggleSwitchProps {
  enabled: boolean;
  onClick: () => void;
}

const ToggleSwitch = ({enabled, onClick}: ToggleSwitchProps) => {
  return (
    <Container onPress={onClick} enabled={enabled}>
      <SwitchOne />
    </Container>
  );
};

const SwitchOne = styled.View`
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 13px;
`;

const Container = styled.Pressable<{
  enabled: boolean;
}>`
  display: flex;
  width: 44px;
  height: 20px;
  padding: 2px;
  transition: all 0.3s ease-in-out;
  align-items: ${props => (!props.enabled ? 'flex-start' : 'flex-end')};
  border-radius: 15px;
  background-color: ${props => (props.enabled ? '#000000' : '#D7D8DA')};
`;

export default ToggleSwitch;
