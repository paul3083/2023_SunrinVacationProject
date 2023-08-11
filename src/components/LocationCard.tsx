import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Column, Gap, Row, SuitText, Wrapper} from '@components/Atomic';
import Icon from '@components/Icon';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import FavoriteButton from '@components/FavoriteButton';
import {Linking} from 'react-native';

interface LocationCardProps {
  locationId: string;
  name: string;
  imageUrl: string;
  url: string;
}

const LocationCard = ({locationId, name, imageUrl, url}: LocationCardProps) => {
  const [heartCount, setHeartCount] = useState(0);
  useEffect(() => {
    firestore()
      .collection(`Locations/${locationId}/users`)
      .onSnapshot(
        querySnapshot => {
          let _hardCount = 0;
          querySnapshot.forEach((doc, _) => {
            if (doc.get('isPressed') as boolean) {
              _hardCount++;
            }
          });
          setHeartCount(_hardCount);
        },
        error => {
          console.log(error);
        },
      );
  }, [locationId]);

  // useEffect(() => {
  //   firestore().collection('Locations').doc(locationId).update({
  //     heartCount: heartCount,
  //   });
  // }, [heartCount, locationId]);
  return (
    <Container
      onPress={async () => {
        await Linking.openURL(url);
      }}>
      <Column gap={12}>
        <LocationImage source={{uri: imageUrl}} />
        <Wrapper padding={12}>
          <Column gap={4}>
            <SuitText weight={700} size={20}>
              {name}
            </SuitText>
            <Row gap={4} style={{alignItems: 'center'}}>
              <Icon name={'favorite'} size={20} />
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
          <Gap height={19} />
          <Row style={{justifyContent: 'flex-end'}}>
            <FavoriteButton locationId={locationId} />
          </Row>
        </Wrapper>
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
