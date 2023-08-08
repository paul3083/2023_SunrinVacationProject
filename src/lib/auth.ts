import auth from '@react-native-firebase/auth';

export function LogIn(email: string, password: string) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function LogOut() {
  return auth().signOut();
}

export function Register({email, password}: {email: string; password: string}) {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Successfully created user:', user);
      return user; // Return the user information.
    })
    .catch(error => {
      console.log('Error creating user:', error);
      throw error; // Rethrow the error to handle it in the calling component.
    });
}

export function subscribeAuth(callback: (user: any) => void) {
  return auth().onAuthStateChanged(callback);
}
