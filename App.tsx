import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '@navigation/RootNavigation';
import {RecoilRoot} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </RecoilRoot>
  );
}
export default App;
