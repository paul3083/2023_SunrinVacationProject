import React from 'react';
import {SuitText} from '@components/Atomic';
import styled from 'styled-components/native';
import Icon from '@components/Icon';

interface IHeaderProps {
  title: string;
}

const Header = ({title}: IHeaderProps) => {
  return (
    <Container>
      <SuitText weight={800} size={28}>
        {title}
      </SuitText>
      <Icon name={'notifications'} size={30} color={'#1C1B1F'} />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
