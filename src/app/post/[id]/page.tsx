import React from 'react';
import { Metadata } from 'next';
import PostTitleSection from '@/components/Post/PostTitleSection';
import PostInfoSection from '@/components/Post/PostInfoSection';
import MDXViewerSection from '@/components/Post/MDXViewerSection';
import { type Post } from '@/types';
import MDViewer from '@/components/Post/MDViewer';

type PostProps = {
  params: {
    id: string;
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`);
  if (!res.ok) throw new Error(res.statusText);
  const posts: Post[] = await res.json();

  return posts.map((post) => ({ id: post.id.toString() }));
};

export const generateMetadata = async ({
  params,
}: PostProps): Promise<Metadata> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${params.id}`,
  );
  if (!res.ok) throw new Error(res.statusText);

  const post: Post = await res.json();

  return {
    title: post.title,
    description: post.title,
    keywords: post.tags.map((tag) => tag.label),
    openGraph: {
      title: post.title,
      description: post.title,
      images: ['/images/thumbnail.jpg'],
    },
  };
};

const Post = async ({ params: { id } }: PostProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${id}`,
    {
      credentials: 'include',
    },
  );

  if (!res.ok) {
    if (res.status === 404) return <div>No Data</div>;
    throw new Error(res.statusText);
  }

  const post: Post = await res.json();

  return (
    <main>
      <PostTitleSection title={post.title} />
      <PostInfoSection post={post} />
      {/* <MDXViewerSection content={post.body} /> */}
      <MDViewer content={post.body} />
    </main>
  );
};

export default Post;
