import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {SafeAreaView, Text} from 'react-native';

const MapScreen = () => {
  return <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} />;
};

export default MapScreen;
