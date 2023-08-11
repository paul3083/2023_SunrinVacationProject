import React, {useEffect, useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Gap,
  Row,
  StyledSafeAreaView,
  SuitText,
  Wrapper,
} from '@components/Atomic';
import {TouchableOpacity, View} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styled from 'styled-components/native';

const AddScheduleScreen = ({navigation}: any) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dateTime = {
    month: ((selectedDate?.getMonth() ?? -1) + 1).toString().padStart(2, '0'),
    day: (selectedDate?.getDate() ?? 0).toString().padStart(2, '0'),
    hour: (selectedDate?.getHours() ?? 0).toString().padStart(2, '0'),
    minute: (selectedDate?.getMinutes() ?? 0).toString().padStart(2, '0'),
  };
  useEffect(() => {}, [selectedDate]);
  return (
    <StyledSafeAreaView>
      <Header navigation={navigation} date={selectedDate} title={title} />
      <Wrapper padding={24}>
        <InputBox placeholder={'제목'} value={title} onChangeText={setTitle} />
        <Gap height={24} />
        <DateContainer onPress={() => setDatePickerVisibility(true)}>
          <Row style={{justifyContent: 'space-between'}}>
            <SuitText weight={400} size={16} color={'#1C1B1F'}>
              날짜 설정
            </SuitText>
            <SuitText weight={600} size={16} color={'#1C1B1F'}>
              {`${dateTime.month}/${dateTime.day}`}
            </SuitText>
          </Row>
          <View
            style={{width: '100%', height: 1, backgroundColor: '#E8E8E9'}}
          />
          <Row style={{justifyContent: 'space-between'}}>
            <SuitText weight={400} size={16} color={'#1C1B1F'}>
              시간 설정
            </SuitText>
            <SuitText weight={600} size={16} color={'#1C1B1F'}>
              {`${dateTime.hour}:${dateTime.minute}`}
            </SuitText>
          </Row>
        </DateContainer>
      </Wrapper>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={'datetime'}
        onConfirm={date => {
          setSelectedDate(date);
          setDatePickerVisibility(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />
    </StyledSafeAreaView>
  );
};

const Header = ({navigation, date, title}: any) => {
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <SuitText size={20} weight={500} color={'#1C1B1F'}>
          취소
        </SuitText>
      </TouchableOpacity>
      <SuitText size={20} weight={600} color={'#1C1B1F'}>
        새로운 일정
      </SuitText>
      <TouchableOpacity
        disabled={!date}
        onPress={() => {
          const userUid = firebase.auth().currentUser!.uid;
          console.log(userUid);
          const dateTimestamp = firestore.Timestamp.fromDate(date!);
          console.log(dateTimestamp);
          firestore()
            .collection(`users/${userUid}/schedules`)
            .add({
              title: title,
              time: dateTimestamp,
            })
            .then(() => {
              navigation.pop();
            });
        }}>
        <SuitText size={20} weight={500} color={date ? '#1C1B1F' : '#B4B4B8'}>
          추가
        </SuitText>
      </TouchableOpacity>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  width: 100%;
`;

const InputBox = styled.TextInput.attrs({
  placeholderTextColor: '#BBBBBC',
})`
  width: 100%;
  padding: 15px 16px;
  border-radius: 15px;
  background: white;
  font-size: 16px;
  font-weight: 500;
  font-family: 'SUIT Variable';
`;

const DateContainer = styled.TouchableOpacity`
  border-radius: 15px;
  background: white;
  display: flex;
  flex-direction: Column;
  width: 100%;
  padding: 16px;
  gap: 15px;
`;

export default AddScheduleScreen;
