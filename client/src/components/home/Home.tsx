import React, { FC } from 'react';
// import { Link } from 'react-router-dom';

type User = {
  email: string;
};

interface UserProps {
  user: User;
  userEmail: string;
}

const Home: FC<UserProps> = (props: UserProps) => {
  return (
    <section className="home">
      <h1 className="home__title">Home</h1>
      <p>Welcome {props.userEmail}</p>
    </section>
  );
};

export default Home;
