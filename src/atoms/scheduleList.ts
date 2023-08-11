import {atom} from 'recoil';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

interface ScheduleCardProps {
  title: string;
  time: FirebaseFirestoreTypes.Timestamp;
}

const scheduleListAtom = atom<Map<string, ScheduleCardProps[]>>({
  key: 'scheduleListAtom',
  default: new Map<string, ScheduleCardProps[]>(),
});

export default scheduleListAtom;
