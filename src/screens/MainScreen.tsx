import React from 'react';
import Header from '@components/Header';
import {Gap, StyledSafeAreaView, SuitText, Wrapper} from '@components/Atomic';
import DateCardList from '@components/DateCardList';
import ScheduleCard from '@components/ScheduleCard';
import LocationCardList from '@components/LocationCardList';

const MainScreen = () => {
  return (
    <StyledSafeAreaView>
      <Header title={'홈'} />
      <Wrapper padding={24}>
        <SuitText weight={700} size={28} color={'#1C1B1F'}>
          오늘 운동일정이 {'있습니다.'}
        </SuitText>
        <Gap height={16} />
        <DateCardList />
        <Gap height={24} />
        <ScheduleCard title={'df'} time={new Date()} />
        <Gap height={24} />
        <SuitText weight={500} size={16} color={'#7B7B7D'}>
          추천수가 가장 많은 장소
        </SuitText>
        <Gap height={8} />
      </Wrapper>
      <LocationCardList orderByHeartCount={true} />
    </StyledSafeAreaView>
  );
};

export default MainScreen;
