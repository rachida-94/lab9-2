import React from "react";
import type{ StatsDisplayProps } from "../../types";

export const StatDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {
  const { wordCount, characterCount, readingTime } = stats;

  
  const getStatusMessage = () => {
    if (wordCount === 0) return "Start typing ..."
    if (wordCount < 25) return "Keep going! "
    if (wordCount <= 100) return "You're in the sweet spot!"
    return "Whoa! Consider trimming for clarity"
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-inner text-sm text-gray-800 grid grid-cols-2 gap-y-2 gap-x-4">
      <p>
        <span className="font-semibold">Status:</span> {getStatusMessage()}
      </p>
      <p>
        <span className="font-semibold">Word Count:</span> {wordCount}
      </p>
      <p>
        <span className="font-semibold">Character Count:</span> {characterCount}
      </p>
      {showReadingTime && (
        <p>
          <span className="font-semibold">Estimated Reading Time:</span> {readingTime} min
        </p>
      )}
    </div>
  );
};
