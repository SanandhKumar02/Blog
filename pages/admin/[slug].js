import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDocumentDataOnce} from "react-firebase-hooks/firestore";
import { useForm, useFormState } from "react-hook-form";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import AuthCheck from "../../components/AuthCheck";
import { auth, firestore, serverTimestamp } from "../../lib/firebase";
import MediaUploader from '../../components/MediaUploader/MediaUploader';

const AdminPostEdit = (props) => {
    return ( 
        <AuthCheck>
            <PostEditor />
        </AuthCheck>
    );
}
 
export default AdminPostEdit;

function PostEditor(){
    const [preview , setPreview] = useState(false);

    const router = useRouter();
    const { slug } = router.query;

    const postRef = firestore.collection('users').doc(auth.currentUser.uid).collection('posts').doc(slug);

    const [post] = useDocumentDataOnce(postRef); //Listens to realtime update in post doc 

    return(
        <div>
            {post && (
                <>
                    <section>
                        <h1>{post.title}</h1>
                        <PostForm 
                            postRef={postRef} 
                            defaultValues={post} 
                            preview={preview}
                        />
                    </section>

                    <aside style={{float: "right"}}>
                        <h4>Workspace</h4>
                        <button onClick={() => setPreview(!preview)}>{preview ? 'Edit' : 'Preview'}</button>
                        <Link href={`/${post.username}/${post.slug}`} passHref>
                            <button>Live View</button>
                        </Link>
                    </aside>

                </>
            )}
        </div>
    );
}


function PostForm({  defaultValues, postRef, preview}){
    const { register, handleSubmit, reset, formState: { errors }, control, watch } = useForm({ defaultValues, mode: 'onChange' });  //React hook form, function takes in object

    const { isValid, isDirty } = useFormState({
        control
    });

    const updatePost = async ({ content, published }) => {
        await postRef.update({
            content: content,
            published: published,
            updatedAt: serverTimestamp(),
        });

        reset({ content: content, published: published }); //Resets the form values to the given

        toast.success('Post Updated 🥳');
    };
    
    return(
        <form onSubmit={handleSubmit(updatePost)}>
            {preview && (
                <div>
                    <ReactMarkdown>{watch('content')}</ReactMarkdown>
                </div>
            )}

            <div style={{display: preview ? "none" : "flex"}}>
                
                <MediaUploader />

                <textarea {...register("content", {
                    maxLength: { value: 100000, message: 'Opps content too long 😕'},
                    minLength: { value: 5, message: 'Opps content too short 😕'},
                    required: { value: true, message: 'NaN'}
                })}></textarea>

                {errors.content && <p>{errors.content.message}</p>}

                <fieldset>
                    <input type="checkbox" {...register("published")}/>
                    <label>Publish?</label>
                </fieldset>
                <button type="submit" disabled={ !isDirty || !isValid }>Update Changes</button>
            </div>
        </form>
    );

}