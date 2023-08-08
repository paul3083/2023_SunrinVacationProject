import React, {useEffect} from 'react';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import LocationCard from '@components/LocationCard';
import {Row} from '@components/Atomic';
import {ScrollView, View} from 'react-native';

interface LocationCardProps {
  locationId: string;
  name: string;
  imageUrl: string;
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
            locationId: doc.id,
            name: doc.get('name') as string,
            imageUrl: doc.get('imageUrl') as string,
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
            locationId={location.locationId}
            name={location.name}
            imageUrl={location.imageUrl}
          />
        ))}
      </Row>
    </ScrollView>
  );
};

export default LocationCardList;
