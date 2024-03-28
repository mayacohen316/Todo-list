import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

export default function CategoryProgress({ completed }) {
  return (
    <ProgressBar
      completed={completed}
      bgColor="#6200ee"
      height="10px"
      isLabelVisible={false}
      transitionDuration="1s"
      transitionTimingFunction="ease-in-out"
    />
  );
}