import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';
import ScheduleCard from '@components/ScheduleCard';
import {Column, SuitText} from '@components/Atomic';
import {useRecoilValue} from 'recoil';
import scheduleListAtom from '@atoms/scheduleList';

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
              id={schedule.id}
              key={index}
              title={schedule.title}
              time={schedule.time.toDate()}
              checked={schedule.checked}
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
