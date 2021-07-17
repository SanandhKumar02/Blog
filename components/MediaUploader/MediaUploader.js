import { useState } from "react";
import { auth, STATE_CHANGED, storage } from "../lib/firebase";
import Loader from "./Loader";


const MediaUploader = () => {
    
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState(null);
    
    async function uploadFile(e) {

        const file = Array.from(e.target.files)[0];
        const ext = file.type.split('/')[1];

        const ref = storage.ref(`uploads/${auth.currentUser.uid}/${Date.now()}.${ext}`);

        setUploading(true);
        
        const uploadTask = ref.put(file);

        uploadTask.on(STATE_CHANGED, (snapshot) => {
            const percentage = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);

            setProgress(percentage);
        });

        uploadTask
            .then((d) => ref.getDownloadURL())
            .then((url) => {
                setDownloadURL(url);
                setUploading(false);
            });
    };

    return (  
        <div>
            <Loader show={uploading} />
            {uploading && <h4>Upload in progress: {progress}</h4>}

            {!uploading && (
                <>
                    <label>
                        📸
                        <input type="file" onChange={uploadFile} accept="image/x-png,image/gif,image/jpeg" />
                    </label>
                </>
            )}
            {downloadURL && <code>{`![alt](${downloadURL})`}</code>}
        </div>
    );
}
 
export default MediaUploader;