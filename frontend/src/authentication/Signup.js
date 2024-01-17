// function onRegisterWithEmail() {
//   const attributeList = [
//     new CognitoUserAttribute({ Name: "email", Value: email }),
//     new CognitoUserAttribute({
//       Name: "phone_number",
//       Value: phone,
//     }),
//   ];
//   userPool.signUp(username, password, attributeList, null, (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const cognitoUser = result.user;
//     console.log("User registration successful:", cognitoUser);
//   });

//   navigation.navigate("Verification");
// }
// function onRegisterWithPhone() {}
