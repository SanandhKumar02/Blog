import { firestore, fromMillis, postToJSON } from '../lib/firebase';
import Loader from '../components/Loader';
import { useState } from 'react';
import PostFeed from '../components/PostFeed';

const Limit = 2;
export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(1);

  const posts = (await postsQuery.get()).docs.map(postToJSON);

  return {
    props: { posts }, 
  };
}


export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postEnd, setPostEnd] = useState(false);


  const getMorePosts = async() => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const pointer = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(pointer)
      .limit(Limit);

    const newPosts = (await query.get()).docs.map((doc) => doc.data());
    setPosts(posts.concat(newPosts));
    setLoading(false);

    if(newPosts.length < Limit){
      setPostEnd(true);
    }
  }

  return (
    <div>
      <PostFeed posts={posts} />

      {!loading && !postEnd && <button onClick={getMorePosts}>More Posts</button>}

      <Loader show={loading} />

      {postEnd && 'Sorry, No More Post To Show'}
    </div>
  );
}