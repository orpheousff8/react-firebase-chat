import firebase from "firebase/compat";

interface UserInfo {
  uid: string;
  photoURL: string;
  displayName:string
}

export const getUserInfo = (auth: firebase.auth.Auth): UserInfo => {
  if (auth.currentUser) {
    return {
      uid: auth.currentUser.uid,
      photoURL:
        auth.currentUser?.photoURL ||
        "https://api.adorable.io/avatars/23/abott@adorable.png",
      displayName: auth.currentUser.displayName || "Anonymous"
    };
  }
  return {
    uid: "0",
    photoURL: "https://api.adorable.io/avatars/23/abott@adorable.png",
    displayName: "Anonymous"
  };
};
