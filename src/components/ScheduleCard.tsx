import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Column, SuitText} from '@components/Atomic';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CheckIcon from '@assets/icons/check.svg';
import UnCheckIcon from '@assets/icons/uncheck.svg';

interface IScheduleCardProps {
  id: string;
  title: string;
  time: Date;
  checked: boolean;
}

const ScheduleCard = ({id, title, time, checked}: IScheduleCardProps) => {
  const [hour, setHour] = React.useState<string>('');
  const [minute, setMinute] = React.useState<string>('');
  useEffect(() => {
    console.log(time);
    setHour(time.getHours().toString().padStart(2, '0'));
    setMinute(time.getMinutes().toString().padStart(2, '0'));
  }, [time]);
  return (
    <Container
      onPress={() => {
        Alert.alert(
          !checked ? '완료' : '취소',
          !checked ? '일정을 완료하시겠습니까?' : '일정을 취소하시겠습니까?',
          [
            {
              text: '취소',
              onPress: () => {
                console.log('취소');
              },
            },
            {
              text: '완료',
              onPress: async () => {
                const userUid = auth().currentUser!.uid;
                await firestore()
                  .collection(`users/${userUid}/schedules`)
                  .doc(id)
                  .update({checked: !checked});
                console.log('완료');
              },
            },
          ],
        );
      }}
      onLongPress={() => {
        Alert.alert(
          '삭제',
          '일정을 삭제하시겠습니까?',
          [
            {
              text: '취소',
              onPress: () => {
                console.log('취소');
              },
            },
            {
              text: '삭제',
              onPress: async () => {
                const userUid = auth().currentUser!.uid;
                await firestore()
                  .collection(`users/${userUid}/schedules`)
                  .doc(id)
                  .delete();
                console.log('삭제');
              },
            },
          ],
          {cancelable: true},
        );
      }}>
      <Column gap={4}>
        <SuitText weight={700} size={20}>
          {title}
        </SuitText>
        <SuitText weight={500} size={16} color={'#B2B2B2'}>
          {`${hour}:${minute}`}
        </SuitText>
      </Column>
      {checked ? (
        <CheckIcon width={24} height={24} />
      ) : (
        <UnCheckIcon width={24} height={24} />
      )}
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 77px;
  border-radius: 15px;
  padding: 12px 16px;
  background: white;
`;

export default ScheduleCard;
