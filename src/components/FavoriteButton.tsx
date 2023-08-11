import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native';
import Icon from '@components/Icon';

interface FavoriteButtonProps {
  locationId: string;
}

const FavoriteButton = ({locationId}: FavoriteButtonProps) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  useEffect(() => {
    const userUid = auth().currentUser!.uid;
    firestore()
      .collection(`Locations/${locationId}/users`)
      .doc(userUid)
      .onSnapshot(doc => {
        if (doc.exists) {
          setIsFocused(doc.data()!.isPressed);
        }
      });
  }, [locationId]);

  const onPress = () => {
    const userUid = auth().currentUser!.uid;
    setIsFocused(!isFocused);
    const favoriteRef = firestore()
      .collection(`Locations/${locationId}/users`)
      .doc(userUid);
    favoriteRef.set({
      isPressed: !isFocused,
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {isFocused ? (
        <Icon name={'favorite'} size={30} />
      ) : (
        <Icon name={'favorite_outline'} size={30} />
      )}
    </TouchableOpacity>
  );
};

export default FavoriteButton;
