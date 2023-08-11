import React from 'react';
import {Row} from '@components/Atomic';
import DateCard from '@components/DateCard';
import selectedDateIndexAtom from '@atoms/selectedDateIndexAtom';
import {useRecoilValue} from 'recoil';

const DateCardList = () => {
  const selectedDateIndex = useRecoilValue(selectedDateIndexAtom);
  return (
    <Row gap={23}>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          const date = calculateDateAndDay(index).date;
          const dayOfWeek = calculateDateAndDay(index).dayOfWeek;
          return (
            <DateCard
              key={index}
              index={index}
              selected={index === selectedDateIndex}
              date={date}
              dayOfWeek={dayOfWeek}
            />
          );
        })}
    </Row>
  );
};

const calculateDateAndDay = (offset: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + offset);
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayIndex = currentDate.getDay();
  const dayOfWeek = daysOfWeek[dayIndex];
  const day = currentDate.getDate();
  return {
    date: day,
    dayOfWeek: dayOfWeek,
  };
};

export default DateCardList;
