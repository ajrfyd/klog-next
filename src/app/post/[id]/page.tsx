import React from 'react';
import SectionTitle from '@/components/Post/SectionTitle';
import PostItem from '@/components/Post/PostItem';
import FluidSection from '@/components/Post/FluidSection';

const Post = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <SectionTitle title={params.id} />
      <PostItem id={params.id} />
      Id: [{params.id}]{' '}
    </main>
  );
};

export default Post;
