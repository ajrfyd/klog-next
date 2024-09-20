import React from 'react';

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="section-xs">
      <div className="container-fluid text-center">
        <h1 className="display-1 fw-medium mb-0">{title}</h1>
        {/* <h1 className="display-1 fw-medium mb-0"></h1> */}
      </div>
    </div>
  );
};

export default SectionTitle;
