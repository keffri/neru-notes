import React, { FC } from 'react';

interface ViewProps {
  cookies: { [x: string]: any };
}

const View: FC<ViewProps> = (props: ViewProps) => {
  return (
    <section className="view">
      {!props.cookies.AuthToken && (
        <div className="view__fail">
          <h2 className="view__fail--center">
            Please log in if you wish to view your logs.
          </h2>
        </div>
      )}

      {props.cookies.AuthToken && (
        <div className="view__pass">
          <h1 className="view__title">View</h1>
        </div>
      )}
    </section>
  );
};

export default View;
