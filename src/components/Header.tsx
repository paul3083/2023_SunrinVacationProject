import React from 'react';
import {SuitText} from '@components/Atomic';
import styled from 'styled-components/native';
import Icon from '@components/Icon';
import {TouchableOpacity} from 'react-native';

interface IHeaderProps {
  title: string;
  iconShow?: boolean;
  callback?: () => void;
}

const Header = ({title, iconShow, callback}: IHeaderProps) => {
  return (
    <Container>
      <SuitText weight={700} size={26}>
        {title}
      </SuitText>
      {iconShow ? (
        <TouchableOpacity onPress={callback}>
          <Icon name={'add'} size={30} color={'#1C1B1F'} />
        </TouchableOpacity>
      ) : null}
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
