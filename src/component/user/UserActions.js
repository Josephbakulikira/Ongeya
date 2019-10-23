import { toastr } from "react-redux-toastr";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/AsyncActions";

export const updateProfile = (user) =>
    async (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        const {isLoaded, isEmpty, ...updatedUser} = user;
        try{
            await firebase.updateProfile(updatedUser);
            toastr.success('success', 'your profile has been updated')
        }catch(error){
            console.log(error)
        }
    }

    export const uploadProfileImage = (file, fileName) => 
        async (dispatch, getState, {getFirebase, getFirestore}) => {
            const firebase = getFirebase();
            const firestore = getFirestore();
            const user = firebase.auth().currentUser;
            const path = `${user.uid}/user_images`;
            const options ={
                name: fileName
            };

            try{
                dispatch(asyncActionStart())
                let uploadedFile = await firebase.uploadFile(path, file, null, options) 
                let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
                let userDoc = await firestore.get(`users/${user.uid}`);
                if(!userDoc.data().photoURL){
                    await firebase.updateProfile({
                        photoURL: downloadURL
                    });
                    await user.updateProfile({
                        photoURL: downloadURL
                    })
                }
                await firestore.add({
                    collection: 'users',
                    doc: user.uid,
                    subcollections: [{collection: 'photos'}]
                }, {
                    name: fileName,
                    url: downloadURL
                })
            dispatch(asyncActionFinish())
            }catch(error){
                console.log(error);
                dispatch(asyncActionError())
            }
        }