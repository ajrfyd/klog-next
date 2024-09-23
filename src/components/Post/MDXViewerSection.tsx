import React from 'react';
import FluidSection from './FluidSection';
import { MDXRemote } from 'next-mdx-remote/rsc';

type MDXViewerSectionProps = {
  content: string;
};

const MDXViewerSection = ({ content }: MDXViewerSectionProps) => {
  return (
    <FluidSection>
      <div className="mdx-container">
        <MDXRemote source={content} />
      </div>
    </FluidSection>
  );
};

export default MDXViewerSection;
