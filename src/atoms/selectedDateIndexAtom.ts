import {atom} from 'recoil';

const SelectedDateIndexAtom = atom<number>({
  key: 'SelectedDateIndex',
  default: 0,
});

export default SelectedDateIndexAtom;
