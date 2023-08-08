import React, {useEffect} from 'react';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import LocationCard from '@components/LocationCard';
import {Row} from '@components/Atomic';
import {ScrollView, View} from 'react-native';

interface LocationCardProps {
  name: string;
  imageUrl: string;
  heartCount: number;
  geoPoint?: FirebaseFirestoreTypes.GeoPoint;
}

interface LocationCardListProps {
  orderByHeartCount?: boolean;
}

const LocationCardList = ({orderByHeartCount}: LocationCardListProps) => {
  const [locationList, setLocationList] = React.useState<LocationCardProps[]>(
    [],
  );
  useEffect(() => {
    const collection = orderByHeartCount
      ? firestore().collection('Locations').orderBy('heartCount', 'desc')
      : firestore().collection('Locations');
    collection.onSnapshot(
      querySnapshot => {
        const _locationList: LocationCardProps[] = [];
        querySnapshot.forEach((doc, _) => {
          _locationList.push({
            name: doc.get('name') as string,
            imageUrl: doc.get('imageUrl') as string,
            heartCount: doc.get('heartCount') as number,
          });
        });
        setLocationList(_locationList);
      },
      error => {
        console.log(error);
      },
    );
  }, [orderByHeartCount]);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Row gap={24}>
        <View />
        {locationList.map((location, index) => (
          <LocationCard
            key={index}
            name={location.name}
            imageUrl={location.imageUrl}
            heartCount={location.heartCount}
          />
        ))}
      </Row>
    </ScrollView>
  );
};

export default LocationCardList;
