import auth from '@react-native-firebase/auth';

export const logIn = async (email: string, password: string) => {
  await auth().signInWithEmailAndPassword(email, password);
};

export const logOut = async () => {
  await auth().signOut();
};

export const register = async (email: string, password: string) => {
  await auth().createUserWithEmailAndPassword(email, password);
};
