import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation, {GeoCoordinates} from 'react-native-geolocation-service';
import {SuitText} from '@components/Atomic';
import styled from 'styled-components/native';
import ToggleSwitch from '@components/ToggleSwitch';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

interface UserLocation {
  userUid: string;
  longitude: number;
  latitude: number;
}

const MapScreen = () => {
  const [myLocation, setMyLocation] = useState<GeoCoordinates | null>(null);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [usersLocation, setUsersLocation] = useState<UserLocation[]>([]);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setMyLocation(position.coords);
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  }, []);
  useEffect(() => {
    firestore()
      .collection('UsersLocations')
      .onSnapshot(
        querySnapshot => {
          const _usersLocation: UserLocation[] = [];
          querySnapshot.forEach((doc, _) => {
            const location = doc.get(
              'location',
            ) as FirebaseFirestoreTypes.GeoPoint;
            _usersLocation.push({
              userUid: doc.get('userUid') as string,
              latitude: location.latitude,
              longitude: location.longitude,
            });
          });
          setUsersLocation(_usersLocation);
        },
        error => {
          console.log(error);
        },
      );
  }, []);
  useEffect(() => {
    const userUid = auth().currentUser!.uid;
    if (enabled) {
      firestore()
        .collection('UsersLocations')
        .doc(`${userUid}`)
        .set({
          userUid: userUid,
          location: new firestore.GeoPoint(
            myLocation!.latitude,
            myLocation!.longitude,
          ),
        });
    } else {
      firestore().collection('UsersLocations').doc(`${userUid}`).delete();
    }
  }, [enabled, myLocation]);
  return (
    <Container>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: myLocation?.latitude || 0,
          longitude: myLocation?.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {usersLocation.map((userLocation, index) => {
          const userUid = auth().currentUser!.uid;
          if (userLocation.userUid !== userUid) {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                }}
              />
            );
          }
        })}
      </MapView>
      <Row>
        <SuitText size={16} weight={500}>
          내 위치 공유하기
        </SuitText>
        <ToggleSwitch enabled={enabled} onClick={() => setEnabled(!enabled)} />
      </Row>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90px;
  width: 100%;
  padding: 30px;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
`;

export default MapScreen;
