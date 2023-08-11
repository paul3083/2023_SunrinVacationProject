import React from 'react';
import {SuitText} from '@components/Atomic';
import styled from 'styled-components/native';
import {useSetRecoilState} from 'recoil';
import SelectedDateIndexAtom from '@atoms/selectedDateIndexAtom';

interface DateCardProps {
  index: number;
  selected: boolean;
  date: number;
  dayOfWeek: string;
}

const DateCard = ({index, selected, date, dayOfWeek}: DateCardProps) => {
  const setSelectedDate = useSetRecoilState(SelectedDateIndexAtom);
  const onPress = () => {
    setSelectedDate(index);
  };
  return (
    <Container
      onPress={onPress}
      style={
        selected ? {backgroundColor: 'black'} : {backgroundColor: 'white'}
      }>
      <SuitText
        weight={selected ? 700 : 500}
        size={16}
        color={selected ? 'white' : 'black'}>
        {date}
      </SuitText>
      <SuitText
        weight={selected ? 700 : 500}
        size={16}
        color={selected ? 'white' : 'black'}>
        {dayOfWeek}
      </SuitText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 50px;
  height: 80px;
  border-radius: 12px;
`;

export default DateCard;
