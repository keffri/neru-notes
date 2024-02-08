import React, { FC } from 'react';
import { EditNote, Search, Bedtime } from '@mui/icons-material';

interface ModalProps {
  openAuthModal: () => void;
}

const LandingPage: FC<ModalProps> = (props: ModalProps) => {
  return (
    <section className="landing">
      <div className="landing__container">
        <h1 className="landing__title">Neru Notes</h1>
        <div className="landing__descriptions">
          <ul className="landing__list">
            <li>
              <p>Track</p>
              <EditNote className="landing__icon" />
            </li>
            <li>
              <p>Analyze</p>
              <Search className="landing__icon" />
            </li>
            <li>
              <p>Sleep</p>
              <Bedtime className="landing__icon" />
            </li>
          </ul>
        </div>
        <p className="landing__text landing--medium">
          Sleep tracking made simple.
        </p>
        <button
          data-testid="landingPage_button"
          className="landing__button"
          onClick={() => props.openAuthModal()}
        >
          Get started!
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
