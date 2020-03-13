
var admin = require("firebase-admin");
var uid = process.argv[2];

var serviceAccount = require("./angular-firebase-employee-dash-firebase-adminsdk-apg1e-7fffb5f3d5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://angular-firebase-employee-dash.firebaseio.com"
});

admin.auth().setCustomUserClaims(uid, { admin: true })
.then(() => {
    console.log('custom claims set for user', uid);
    process.exit();
})
.catch(error => {
    console.log('error', error);
    process.exit(1);
});