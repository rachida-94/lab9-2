import {type  characterCounterProps } from "../../types";
import { type TextStatsProps } from "../../types";
 interface Props{
    stats:TextStatsProps
    limits?: characterCounterProps
 }


export const CharacterCounter: React.FC<Props> = ({ stats, limits }) => {
  const { wordCount, readingTime } = stats;
  const { minWords=25, maxWords=100, targetReadingTime } = limits || {};

  return (
    <div className="mt-0 bg-red-50 rounded-lg p-4 shadow-inner text-sm text-red-700 space-y-2">

      {minWords !== undefined && wordCount < minWords && (
        <p >
          <span className="font-semibold">Minimum:</span> {minWords} words</p>
      )}

      {maxWords !== undefined && wordCount > maxWords && (
        <p ><span className="font-semibold">Maximum:</span> {maxWords} words</p>
      )}

      {targetReadingTime !== undefined && readingTime > targetReadingTime && (
        <p>
           Exceeds target reading time of {targetReadingTime} min
        </p>
      )}
    </div>
  );
};

 