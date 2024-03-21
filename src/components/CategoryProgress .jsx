import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

export default function CategoryProgress({ completed, total }) {
  const completionPercentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <ProgressBar
      completed={completionPercentage.toFixed(2)}
      bgColor="#6200ee"
      height="10px"
      isLabelVisible={false}
      transitionDuration="1s"
      transitionTimingFunction="ease-in-out"
    />
  );
}
