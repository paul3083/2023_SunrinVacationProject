import React, {useEffect, useState} from 'react';
import Header from '@components/Header';
import {Gap, StyledSafeAreaView, SuitText, Wrapper} from '@components/Atomic';
import DateCardList from '@components/DateCardList';
import ScheduleCard from '@components/ScheduleCard';
import LocationCardList from '@components/LocationCardList';
import {useRecoilState, useRecoilValue} from 'recoil';
import scheduleListAtom from '@atoms/scheduleList';
import SelectedDateIndexAtom from '@atoms/selectedDateIndexAtom';
import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

interface ScheduleCardProps {
  title: string;
  time: FirebaseFirestoreTypes.Timestamp;
}
const MainScreen = () => {
  const selectedDateIndex = useRecoilValue(SelectedDateIndexAtom);
  const [scheduleList, setScheduleList] = useRecoilState(scheduleListAtom);
  const [schedule, setSchedule] = useState<ScheduleCardProps>();
  useEffect(() => {
    const selectedDay = new Date();
    selectedDay.setDate(selectedDay.getDate() + selectedDateIndex);
    const d = scheduleList.get(
      `${selectedDay.getMonth() + 1}월 ${selectedDay.getDate()}일`,
    );
    console.log(d);
    d
      ? setSchedule({
          title: d[0].title,
          time: d[0].time,
        })
      : setSchedule(undefined);
  }, [scheduleList, selectedDateIndex]);
  useEffect(() => {
    const userUid = auth().currentUser!.uid;
    firestore()
      .collection(`users/${userUid}/schedules`)
      .orderBy('time', 'asc')
      .onSnapshot(
        querySnapshot => {
          const list: ScheduleCardProps[] = [];
          querySnapshot.forEach((doc, _) => {
            list.push({
              title: doc.get('title') as string,
              time: doc.get('time') as FirebaseFirestoreTypes.Timestamp,
            });
          });
          const _scheduleList: Map<string, ScheduleCardProps[]> = new Map();
          list.forEach(date => {
            const month = date.time.toDate().getMonth() + 1;
            const day = date.time.toDate().getDate();
            const dateString = `${month}월 ${day}일`;
            if (_scheduleList.has(dateString)) {
              // @ts-ignore
              _scheduleList.get(dateString).push(date);
            } else {
              _scheduleList.set(dateString, [date]);
            }
          });
          setScheduleList(_scheduleList);
        },
        error => {
          console.log(error);
        },
      );
  }, [setScheduleList]);
  return (
    <StyledSafeAreaView>
      <Header title={'홈'} />
      <Wrapper padding={24}>
        <SuitText weight={700} size={28} color={'#1C1B1F'}>
          오늘 운동일정이 {schedule ? '있습니다.' : '없습니다.'}
        </SuitText>
        <Gap height={16} />
        <DateCardList />
        <Gap height={24} />
        {schedule ? (
          <ScheduleCard title={schedule.title} time={schedule.time.toDate()} />
        ) : null}
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
