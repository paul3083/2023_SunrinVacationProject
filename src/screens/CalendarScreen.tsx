import React from 'react';
import {StyledSafeAreaView, Wrapper} from '@components/Atomic';
import Header from '@components/Header';
import ScheduleCardList from '@components/ScheduleCardList';
import {Text, TouchableOpacity} from 'react-native';

const CalendarScreen = ({navigation}: any) => {
  return (
    <StyledSafeAreaView>
      <Header
        title={'캘린더'}
        iconShow={true}
        callback={() => {
          navigation.navigate('AddSchedule');
        }}
      />
      <Wrapper padding={24}>
        <ScheduleCardList />
      </Wrapper>
    </StyledSafeAreaView>
  );
};

export default CalendarScreen;
