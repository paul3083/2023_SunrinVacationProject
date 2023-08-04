import React, {useEffect} from 'react';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import LocationCard from '@components/LocationCard';
import {Row} from '@components/Atomic';
import {ScrollView, View} from 'react-native';

// import GeoPoint = FirebaseFirestoreTypes.GeoPoint;

interface ILocationCardProps {
  name: string;
  imageUrl: string;
  heartCount: number;
  geoPoint?: FirebaseFirestoreTypes.GeoPoint;
}

interface ILocationCardListProps {
  orderByHeartCount?: boolean;
}

const LocationCardList = ({orderByHeartCount}: ILocationCardListProps) => {
  const [locationList, setLocationList] = React.useState<ILocationCardProps[]>(
    [],
  );
  useEffect(() => {
    const collection = orderByHeartCount
      ? firestore().collection('Locations').orderBy('heartCount', 'desc')
      : firestore().collection('Locations');
    collection.onSnapshot(
      querySnapshot => {
        const _locationList: ILocationCardProps[] = [];
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
  }, []);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Row style={{gap: 24}}>
        <View />
        {locationList.map((location, _) => (
          <LocationCard
            key={location.name}
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
