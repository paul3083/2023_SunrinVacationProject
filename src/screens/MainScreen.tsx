import React from 'react';
import Header from '@components/Header';
import {StyledSafeAreaView} from '@components/Atomic';
import {Text, TouchableOpacity} from 'react-native';
import {logOut} from '@/lib/auth';

const MainScreen = () => {
  return (
    <StyledSafeAreaView>
      <Header title={'홈'} />
      <TouchableOpacity onPress={logOut}>
        <Text>돌아가기</Text>
      </TouchableOpacity>
    </StyledSafeAreaView>
  );
};

// const M = () => {
//   return (
//     <Row
//       style={{
//         width: '100%',
//         margin: 24,
//         justifyContent: 'space-between',
//         backgroundColor: '#ffffff',
//       }}>
//       {/*<Day />*/}
//       {/*<Day />*/}
//       {/*<Day />*/}
//       {/*<Day />*/}
//       {/*<Day />*/}
//     </Row>
//   );
// };
//
// const Day = styled.View`
//   width: 50px;
//   height: 80px;
//   margin: 0 24px;
//   background-color: #00bf00;
// `;

export default MainScreen;
