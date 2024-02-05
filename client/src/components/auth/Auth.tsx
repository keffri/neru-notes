import React, { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface AuthProps {
  closeAuthModal: () => void;
}

const Auth: FC<AuthProps> = (props: AuthProps) => {
  const [loggingIn, setLoggingIn] = useState(true);

  const switchAuth = (status: boolean) => {
    setLoggingIn(status);
  };

  return (
    <section className="auth">
      {loggingIn ? (
        <h1 className="auth__title">Login</h1>
      ) : (
        <h1 className="auth__title">Sign-Up</h1>
      )}
      <button
        data-testid="button-close"
        className="auth__close"
        onClick={() => props.closeAuthModal()}
      >
        <CloseIcon />
      </button>
      <form className="auth__form">
        <label htmlFor="email">Email:</label>
        <input type="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" />
        {!loggingIn && (
          <div className="auth__div">
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input type="password" autoComplete="off" />
          </div>
        )}
        <input
          type="submit"
          className="auth__submit"
          value={loggingIn ? 'Log In' : 'Sign Up'}
        />
      </form>

      {loggingIn ? (
        <p className="auth__message">
          Not a member yet? Click{' '}
          <span
            data-testid="form_switch"
            className="auth--text"
            onClick={() => switchAuth(false)}
          >
            here
          </span>{' '}
          to sign up!
        </p>
      ) : (
        <p className="auth_message">
          Already a member? Click{' '}
          <span className="auth--text" onClick={() => switchAuth(true)}>
            here
          </span>{' '}
          to log in!
        </p>
      )}
    </section>
  );
};

export default Auth;
