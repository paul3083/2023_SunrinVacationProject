import auth from '@react-native-firebase/auth';

export const LogIn = async (email: string, password: string) => {
  await auth().signInWithEmailAndPassword(email, password);
};

export const LogOut = async () => {
  await auth().signOut();
}
