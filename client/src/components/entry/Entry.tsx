import React, { FC } from 'react';

interface EntryProps {
  cookies: { [x: string]: any };
}

const Entry: FC<EntryProps> = (props: EntryProps) => {
  return (
    <section className="entry">
      {!props.cookies.AuthToken && (
        <div className="entry__fail">
          <h2 className="entry__fail--center">
            Please log in if you wish to create an entry.
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
