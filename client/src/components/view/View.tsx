import React, { FC } from 'react';

interface ViewProps {
  cookies: { [x: string]: any };
}

const View: FC<ViewProps> = (props: ViewProps) => {
  return (
    <section className="view">
      <h1 className="view__title">View</h1>
    </section>
  );
};

export default View;
