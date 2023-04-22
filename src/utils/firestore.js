import 'firebase/firestore';
import {storage} from '../utils/fireconnect.js';
import {getDownloadURL, ref,uploadBytesResumable} from 'firebase/storage';
export const upf = async (file) => {
    const storageRef = ref(storage,`files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef,file);
    await uploadTask.on('state_changed', (snapshot) =>{
    },(error)=>{
        console.log(error);
    },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            return downloadURL;
        })
    })
}