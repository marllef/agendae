import { useCallback, useEffect, useState } from 'react';
import { MdStar } from 'react-icons/md';

interface Props {
  ratings: any[];
}

export const StarRating = ({ ratings = [] }: Props) => {
  const stars = Array.from(Array(5).keys());
  const [value, setValue] = useState<number>(-1);

  const calculate = useCallback(() => {
    if (!ratings.length) return -1;

    const val = Number(
      Number(ratings.reduce((a, b) => a + b) / ratings.length).toFixed(2),
    );

    return val;
  }, [ratings]);

  useEffect(() => {
    const starsCount = calculate();

    setValue(starsCount);
  }, [ratings]);

  return (
    <div className="flex items-center space-x-1  text-sm text-yellow-500 transition-colors duration-1000">
      {value ? (
        <>
          <div className="flex text-base transition-all duration-1000">
            {(stars || []).map((item, index) => (
              <MdStar
                key={index + '/' + item + '/' + value}
                className={`${
                  index + 1 <= value ? 'text-yellow-500' : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <p className="text-xs">({Math.abs(value)})</p>
        </>
      ) : (
        <span className="font-bold">Novidade!</span>
      )}
    </div>
  );
};
