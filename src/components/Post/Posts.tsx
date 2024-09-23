import Link from 'next/link';
import React from 'react';
import { ResponsePosts } from '@/types';
import { transformDateHandler } from '@/utils/utils';

const Posts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/blog/posts`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);

  const {
    result: { posts },
  }: ResponsePosts = await res.json();

  return (
    <div className="row g-0">
      {posts.map((post, idx) => (
        <div key={post.id} className="col-12">
          <div
            className={`styled-box p-lg-5 ${idx % 2 !== 0 ? 'style-2' : ''}`}
          >
            <div data-hover-img={'/images/blog.png'}>
              <ul className="list-inline-dash mb-2 sm-heading fs-5">
                <li>{transformDateHandler(post.createdAt)}</li>
                {/* <li>{post.category}</li> */}
              </ul>
              <h2 className="display-5 fw-medium text-truncate">
                <Link href={`/post/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="fs-5 text-truncate">{post.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
