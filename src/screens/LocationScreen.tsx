import React from 'react';
import {SafeAreaView} from 'react-native';
import {Column, SuitText} from '@components/BaseStyledComponents';
import LocationCardList from '@components/LocationCardList';
import Header from '@components/Header';

const LocationScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F6FA'}}>
      <Header title={'장소'} />
      <Column style={{gap: 24}}>
        <LocationCardList />
        <Column style={{gap: 8}}>
          <SuitText
            fontWeight={500}
            fontSize={16}
            style={{
              color: '#7B7B7D',
              width: '100%',
              marginHorizontal: 24,
            }}>
            추천수가 가장 많은 장소
          </SuitText>
          <LocationCardList orderByHeartCount={true} />
        </Column>
      </Column>
    </SafeAreaView>
  );
};

export default LocationScreen;
