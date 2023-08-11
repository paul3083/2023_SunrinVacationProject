import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import Icon from '@components/Icon';
import {Column, SuitText} from '@components/Atomic';

interface IScheduleCardProps {
  title: string;
  time: Date;
}

const ScheduleCard = ({title, time}: IScheduleCardProps) => {
  const [hour, setHour] = React.useState<string>('');
  const [minute, setMinute] = React.useState<string>('');
  useEffect(() => {
    console.log(time);
    setHour(time.getHours().toString().padStart(2, '0'));
    setMinute(time.getMinutes().toString().padStart(2, '0'));
  }, [time]);
  return (
    <Container>
      <Column gap={4}>
        <SuitText weight={700} size={20}>
          {title}
        </SuitText>
        <SuitText weight={500} size={16} color={'#B2B2B2'}>
          {`${hour}:${minute}`}
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
