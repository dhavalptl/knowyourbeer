import firebase from 'firebase';

const config = {
  apiKey: "<your firebase api key>",
  authDomain: "<your firebase auth domin>"
};
firebase.initializeApp(config);

export default firebase;