import {type  characterCounterProps } from "../../types";
import { type TextStatsProps } from "../../types";
 interface Props{
    stats:TextStatsProps
    limits?: characterCounterProps
 }
export const TextStats: React.FC<TextStatsProps> = ({
  characterCount,
  wordCount,
  readingTime,
}) => {
  return (
    <div>
      <p>Word Count: {wordCount}</p>
      <p>Character Count: {characterCount}</p>
      <p>Reading Time: {readingTime} min</p>
    </div>
  );
};

export const CharacterCounter: React.FC<Props> = ({ stats, limits }) => {
  const { wordCount, characterCount, readingTime } = stats;
  const { minWords, maxWords, targetReadingTime } = limits || {};

  return (
    <div>
      <TextStats
        characterCount={characterCount}
        wordCount={wordCount}
        readingTime={readingTime}
      />

      {minWords !== undefined && wordCount < minWords && (
        <p >Minimum: {minWords} words</p>
      )}

      {maxWords !== undefined && wordCount > maxWords && (
        <p >Maximum: {maxWords} words</p>
      )}

      {targetReadingTime !== undefined && readingTime > targetReadingTime && (
        <p>
           Exceeds target reading time of {targetReadingTime} min
        </p>
      )}
    </div>
  );
};

 