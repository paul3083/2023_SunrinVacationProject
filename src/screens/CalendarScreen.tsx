import {SafeAreaView} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Icon from '@components/Icon';
import {StyledSafeAreaView, SuitText} from '@components/BaseStyledComponents';
import ScheduleCard from '@components/ScheduleCard';
import Header from '@components/Header';

const CalendarScreen = () => {
  return (
    <StyledSafeAreaView>
      <Header title={'캘린더'} />
      <Container>
        <Schedule>
          <SuitText fontWeight={500} fontSize={16}>
            7월 30일
          </SuitText>
          <ScheduleCard  schedule={'공원 산책하기'} time={'12:30'}/>
          <ScheduleCard  schedule={'필라테스'} time={'17:00'}/>
        </Schedule>
      </Container>
    </StyledSafeAreaView>
  );
};

const Container = styled.View`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24px;
  gap: 24px;
`;

const Schedule = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export default CalendarScreen;
