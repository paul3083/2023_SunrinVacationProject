import React from "react";
import {SafeAreaView, Text } from "react-native";
import { StyledSafeAreaView } from "@components/Atomic";
import Header from "@components/Header";

const SettingScreen = () => {
  return (
    <StyledSafeAreaView>
      <Header title={'설정'} />
    </StyledSafeAreaView>
  );
};

export default SettingScreen;
