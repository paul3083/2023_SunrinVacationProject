import React from 'react';
import styled from 'styled-components/native';
import {Column, Row, SuitText} from '@components/Atomic';
import Icon from '@components/Icon';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

interface LocationCardProps {
  name: string;
  imageUrl: string;
  heartCount: number;
}

const LocationCard = ({name, imageUrl, heartCount}: LocationCardProps) => {
  return (
    <Container>
      <Column gap={12}>
        <LocationImage source={{uri: imageUrl}} />
        <Column gap={4} style={{marginLeft: 12}}>
          <SuitText weight={700} size={20}>
            {name}
          </SuitText>
          <Row gap={4} style={{alignItems: 'center'}}>
            <Icon name={'favorite'} size={18} />
            <SuitText weight={700} size={16}>
              {heartCount}
            </SuitText>
          </Row>
          <Row gap={4} style={{alignItems: 'center'}}>
            <Icon name={'location_on'} size={18} />
            <SuitText weight={700} size={16}>
              {`${0.8} km`}
            </SuitText>
          </Row>
        </Column>
      </Column>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  width: 201px;
  height: 260px;
  border-radius: 15px;
  background-color: white;
`;

const LocationImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 15px 15px 0 0;
`;

function getDistance(
  location1: FirebaseFirestoreTypes.GeoPoint,
  location2: FirebaseFirestoreTypes.GeoPoint,
) {
  const R = 6371; // 지구 반지름 (단위: km)
  const dLat = deg2rad(location2.latitude - location1.latitude);
  const dLon = deg2rad(location2.longitude - location1.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(location1.latitude)) *
      Math.cos(deg2rad(location2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export default LocationCard;
