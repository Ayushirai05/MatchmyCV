import React from 'react';

const ScoreRing = ({ score }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  // Determine color based on score
  const getColor = (s) => {
    if (s >= 80) return 'text-green-500'; // High score
    if (s >= 50) return 'text-yellow-500'; // Medium score
    return 'text-red-500'; // Low score
  };

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Background Ring */}
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset: 0 }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-gray-100"
        />
        {/* Progress Ring */}
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ 
            strokeDashoffset, 
            transition: 'stroke-dashoffset 1s ease-in-out' 
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={getColor(score)}
        />
      </svg>
      {/* Text in the middle */}
      <div className="absolute flex flex-col items-center">
        <span className={`text-3xl font-bold ${getColor(score)}`}>
          {score}
        </span>
        <span className="text-xs text-gray-400 font-medium">ATS SCORE</span>
      </div>
    </div>
  );
};

export default ScoreRing;