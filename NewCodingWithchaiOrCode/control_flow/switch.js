const userLogin = 'FromGoogle';


switch (userLogin) {
    case 'FromGoogle':
        console.log("User logged in using Google");
        break;
    case 'FromGithub':
        console.log("User logged in using Github");
        break;
    case 'FromFacebook':
        console.log("User logged in using Facebook");
        break;
    default:
        console.log('Invalid User Login');
        break;
}