import React from 'react';

type FluidSectionProps = {
  children: React.ReactNode;
};
const FluidSection = ({ children }: FluidSectionProps) => {
  return (
    <div className="section-xs pt-0">
      <div className="container-fluid">{children}</div>
    </div>
  );
};

export default FluidSection;
