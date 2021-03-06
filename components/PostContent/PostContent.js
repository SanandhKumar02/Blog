import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const PostContent = ({ post }) => {
    const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();
    return (
        <div>
            <h1>{post?.title}</h1>
            <span>
                Authored by
                <Link href={`/${post.username}/`} passHref>
                    <a>@{post.username}</a>
                </Link>
                {createdAt.toISOString()}
            </span>
            <ReactQuill value={post?.content}
                readOnly={true} theme={"bubble"} />
            {/* <ReactMarkdown>{post?.content}</ReactMarkdown> */}
        </div>
    );
}

export default PostContent;