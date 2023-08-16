import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StyledSafeAreaView} from '@components/Atomic';
import Header from '@components/Header';
import auth from '@react-native-firebase/auth';

const SettingScreen = () => {
  return (
    <StyledSafeAreaView>
      <Header title={'설정'} />
      <TouchableOpacity
        onPress={() => {
          auth().signOut();
        }}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </StyledSafeAreaView>
  );
};

export default SettingScreen;
