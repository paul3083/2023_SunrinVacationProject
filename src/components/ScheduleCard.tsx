import React from 'react';
import styled from 'styled-components/native';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import Icon from '@components/Icon';
import {Column, Row, SuitText} from '@components/BaseStyledComponents';

interface IScheduleCardProps {
  schedule: string;
  time: string;
}

const ScheduleCard = ({schedule, time}: IScheduleCardProps) => {
  return (
    <Container>
      <Row style={{margin: 12}}>
        <Column style={{gap: 8}}>
          <SuitText fontWeight={700} fontSize={20}>
            {schedule}
          </SuitText>
          <SuitText fontWeight={400} fontSize={16}>
            {time}
          </SuitText>
        </Column>
        <Icon name={'arrow_forward_ios'} size={24} />
      </Row>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 342px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
`;

export default ScheduleCard;
