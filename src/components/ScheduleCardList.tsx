import React, {Fragment, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {ScrollView} from 'react-native';
import ScheduleCard from '@components/ScheduleCard';
import {Column, SuitText} from '@components/Atomic';
import {useRecoilState, useRecoilValue} from 'recoil';
import scheduleListAtom from '@atoms/scheduleList';

interface ScheduleCardProps {
  id: string;
  title: string;
  time: FirebaseFirestoreTypes.Timestamp;
}

const ScheduleCardList = () => {
  const scheduleList = useRecoilValue(scheduleListAtom);
  const RenderSchedules = () => {
    const list: React.ReactNode[] = [];
    scheduleList.forEach((schedules, date) => {
      list.push(
        <Fragment key={date}>
          <SuitText
            weight={500}
            size={16}
            color={'#7B7B7D'}
            style={{marginLeft: 10}}>
            {date}
          </SuitText>
          {schedules.map((schedule, index) => (
            <ScheduleCard
              key={index}
              title={schedule.title}
              time={schedule.time.toDate()}
            />
          ))}
        </Fragment>,
      );
    });
    return list;
  };

  return (
    <ScrollView style={{height: '100%'}}>
      <Column gap={8}>{RenderSchedules()}</Column>
    </ScrollView>
  );
};

export default ScheduleCardList;
