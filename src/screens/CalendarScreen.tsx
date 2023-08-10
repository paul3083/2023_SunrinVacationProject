import React from 'react';
import {StyledSafeAreaView, Wrapper} from '@components/Atomic';
import Header from '@components/Header';
import ScheduleCardList from '@components/ScheduleCardList';

const CalendarScreen = () => {
  return (
    <StyledSafeAreaView>
      <Header title={'캘린더'} />
      <Wrapper padding={24}>
        <ScheduleCardList />
      </Wrapper>
    </StyledSafeAreaView>
  );
};

export default CalendarScreen;
