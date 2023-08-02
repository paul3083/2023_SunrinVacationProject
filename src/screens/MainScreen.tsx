import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "@components/Icon";
import {Row} from '@components/BaseStyledComponents';
import styled from 'styled-components/native';

const MainScreen = () => {
  return (
    <SafeAreaView>
      <Row />
      <Icon name={'map'} color={'#000000'} size={30} />
    </SafeAreaView>
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
