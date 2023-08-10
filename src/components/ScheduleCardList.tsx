import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {ScrollView} from 'react-native';
import ScheduleCard from '@components/ScheduleCard';
import {Column} from '@components/Atomic';

interface ScheduleCardProps {
  id: string;
  title: string;
  time: FirebaseFirestoreTypes.Timestamp;
}

const ScheduleCardList = () => {
  const [scheduleList, setScheduleList] = useState<ScheduleCardProps[]>([]);
  useEffect(() => {
    const userUid = auth().currentUser!.uid;
    firestore()
      .collection(`users/${userUid}/schedules`)
      .orderBy('time', 'asc')
      .onSnapshot(
        querySnapshot => {
          const _scheduleList: ScheduleCardProps[] = [];
          querySnapshot.forEach((doc, _) => {
            _scheduleList.push({
              id: doc.id,
              title: doc.get('title') as string,
              time: doc.get('time') as FirebaseFirestoreTypes.Timestamp,
            });
          });
          setScheduleList(_scheduleList);
        },
        error => {
          console.log(error);
        },
      );
  }, []);
  return (
    <ScrollView style={{height: '100%'}}>
      <Column gap={8}>
        {scheduleList.map((schedule, index) => (
          <ScheduleCard
            key={index}
            title={schedule.title}
            time={schedule.time.toDate()}
          />
        ))}
      </Column>
    </ScrollView>
  );
};

export default ScheduleCardList;
