import React from 'react';
import FluidSection from '@/components/Post/FluidSection';
import SectionTitle from './SectionTitle';

type PostItemProps = {
  id: string;
};

const PostItem = async ({ id }: PostItemProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/blog/post/${id}`,
  );

  if (!res.ok) throw new Error(`Not Found item`);
  const { result } = await res.json();

  return (
    <>
      <SectionTitle title={result.title} />
      <FluidSection>
        <div className="row g-0 g-lg-5 align-items-end">Hello PostItem??</div>;
      </FluidSection>
      <FluidSection>
        <div
          className="fs-3"
          dangerouslySetInnerHTML={{ __html: result.body }}
        />
      </FluidSection>
    </>
  );
};

export default PostItem;
