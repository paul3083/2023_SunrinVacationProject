import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '@navigation/RootNavigation';
import {RecoilRoot} from 'recoil';
import {Platform, StatusBar} from "react-native";
import Geolocation from "react-native-geolocation-service";

function App() {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('dark-content');
      Geolocation.requestAuthorization('always');
    }
  }, []);
  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </RecoilRoot>
  );
}
export default App;
