import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env. FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  'prompt': 'select_account'
});

export {firebase, googleAuthProvider, database as default};

// // child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val()); 
// });


//   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//       })
//       console.log(expenses);
//   });

//   database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   });

//   setTimeout(() => {
//     database.ref('expenses/-M1SCnN0Oz9lJBAIrj3W/description').set('Newest description');
//   }, 3500);

//   database.ref('notes').push({
//       title: 'course topics',
//       body: 'react native, angular, python'
//   });


// database.ref('expenses').push({
//     description: 'Food bill',
//     note: '',
//     amount: 4500,
//     createdAt: 0,
// });



// database.ref('notes/-M1SAT33wDfjPAymB9_m').remove();


//   const onValueChange = database.ref().on('value', (snapshot) => {
//       console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
//   });

//   setTimeout(() => {
//     database.ref('job/title').set('web dev')
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off('value', onValueChange);
//   }, 5000);

//   setTimeout(() => {
//     database.ref('job/title').set('no dev')
//   }, 6500);

//   database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//       console.log('Error fetching data', e)
//   });

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29)
//   }, 3500);


//   setTimeout(() => {
//       database.ref().off('value', onValueChange)
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(31)
//   }, 10500);


  

//   database.ref().set({
//       name: "michael henry",
//       age: 26,
//       stressLevel: 6,
//       job: {
//           title: 'software developer',
//           company: 'google'
//       },
//       location: {
//           city: "hamtilon",
//           country: "canada"
//       },
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This failed.', e)
//   });

//   database.ref('attributes').set({
//       height: '5ft9',
//       weight: '168lbs'
//   }).then(() => {
//       console.log("Adding attributes succeeded.");
//   }).catch((e) => {
//       console.log("Adding attributes failed.", e);
//   });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Ottawa'
// }); 

// database.ref().remove()
// .then(() => {
//     console.log('Data successfully removed');
// }).catch((e) => {
//     console.log('Removing data failed.', e);
// });