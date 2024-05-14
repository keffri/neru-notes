import React, { FC } from 'react';

interface EntryProps {
  cookies: { [x: string]: any };
}

const Entry: FC<EntryProps> = (props: EntryProps) => {
  return (
    <section className="entry">
      {!props.cookies.AuthToken && (
        <div className="entry__fail">
          <h2 className="vault__fail--center">
            Please long in if you wish to view your logs.
          </h2>
        </div>
      )}

      {props.cookies.AuthToken && (
        <div className="entry__pass">
          <h1 className="entry__title">Entry</h1>
        </div>
      )}
    </section>
  );
};

export default Entry;
