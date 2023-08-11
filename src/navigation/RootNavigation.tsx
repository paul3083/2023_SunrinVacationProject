import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from '@screens/LogInScreen';
import RegisterScreen from '@screens/RegisterScreen';
import {firebase} from '@react-native-firebase/auth';
import BottomNavigation from '@navigation/BottomNavigation';
import AddScheduleScreen from "@screens/AddScheduleScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [isLogIn, setIsLogIn] = React.useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLogIn(true);
      } else {
        setIsLogIn(false);
      }
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogIn ? (
        <>
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name={'AddSchedule'} component={AddScheduleScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
