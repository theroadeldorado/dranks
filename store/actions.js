import { firebase } from '../firebase';

export const signInWithEmailAndPassword = (email, password) => {
  console.log(email, password);
  return async (dispatch) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const { user } = userCredential;

      dispatch({
        type: 'user/SET_USER',
        payload: { email: user.email, uid: user.uid, name: user.displayName },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const createUserWithEmailAndPassword = (email, password, name) => {
  return async (dispatch) => {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);

      if (user) {
        await firebase.firestore().collection('users').doc(user.user.uid).set({
          name: name,
          created: new Date(),
        });
      }

      await signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch({
        type: 'user/SET_USER',
        payload: {},
      });
    } catch (error) {
      throw error;
    }
  };
};
