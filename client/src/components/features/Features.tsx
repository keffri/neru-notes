import React, { FC } from 'react';
import FeaturesCard from './FeaturesCard';
import { EditNote, Search, Bedtime } from '@mui/icons-material';

type Card = {
  title: string;
  icon: any;
  description: string;
};

const trackFeature: Card = {
  title: 'Track',
  icon: (
    <EditNote
      sx={{
        width: '3rem',
        height: '3rem',
      }}
    />
  ),
  description: 'Track sleep data for naps and night times.',
};

const analyzeFeature: Card = {
  title: 'Analyze',
  icon: (
    <Search
      sx={{
        width: '3rem',
        height: '3rem',
      }}
    />
  ),
  description: 'Analyze sleep for patterns and solutions.',
};

const sleepFeature: Card = {
  title: 'Sleep',
  icon: (
    <Bedtime
      sx={{
        width: '3rem',
        height: '3rem',
      }}
    />
  ),
  description: 'Sleep easier with less uncertainty each day.',
};

const Features: FC = () => {
  return (
    <section className="features">
      <h1 className="features__title">Features</h1>
      <div className="features__container">
        <FeaturesCard card={trackFeature} />
        <FeaturesCard card={analyzeFeature} />
        <FeaturesCard card={sleepFeature} />
      </div>
    </section>
  );
};

export default Features;
