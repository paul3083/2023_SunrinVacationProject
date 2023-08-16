import {atom} from 'recoil';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

interface ScheduleCardProps {
  id: string;
  title: string;
  time: FirebaseFirestoreTypes.Timestamp;
  checked: boolean;
}

const scheduleListAtom = atom<Map<string, ScheduleCardProps[]>>({
  key: 'scheduleListAtom',
  default: new Map<string, ScheduleCardProps[]>(),
});

export default scheduleListAtom;
