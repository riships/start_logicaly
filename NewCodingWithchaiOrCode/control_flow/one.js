const userLoginFromFacebook = true;
const userLoginFromGoogle = false;
const userLoginFromContext = true;

if (userLoginFromFacebook && userLoginFromGoogle && userLoginFromContext) {
    console.log("User loggged in");
}
if (userLoginFromFacebook || userLoginFromGoogle || userLoginFromContext) {
    console.log("User loggged in");
}


