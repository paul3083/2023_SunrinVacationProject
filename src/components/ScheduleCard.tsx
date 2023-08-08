import React from 'react';
import styled from 'styled-components/native';
import Icon from '@components/Icon';
import {Column, SuitText} from '@components/Atomic';

interface IScheduleCardProps {
  schedule: string;
  time: string;
}

const ScheduleCard = ({schedule, time}: IScheduleCardProps) => {
  return (
    <Container>
      <Column gap={4}>
        <SuitText weight={700} size={20}>
          {schedule}
        </SuitText>
        <SuitText weight={400} size={16} color={'#B2B2B2'}>
          {time}
        </SuitText>
      </Column>
      <Icon name={'arrow_forward_ios'} size={24} color={'#B2B2B2'} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 77px;
  border-radius: 15px;
  padding: 12px 16px;
  background: white;
`;

export default ScheduleCard;
