import { UIEvent, useEffect, useRef, useState } from 'react';

interface Props {
  images: string[];
  time?: number;
}

export const Carousel = ({ images = [], time = 5000 }: Props) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const scrollLeft = ref.current?.scrollLeft;
      const scrollWidth = ref.current?.scrollWidth;
      const index = Math.round(scrollLeft / (scrollWidth / images.length));

      if (index === images.length - 1) {
        ref.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        ref.current.scrollBy({
          left: 400,
          behavior: 'smooth',
        });
      }
    }, time);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const scrollWidth = event.currentTarget.scrollWidth;
    const index = Math.round(scrollLeft / (scrollWidth / images.length));
    setCurrent(index);
  };

  return (
    <>
      <ul
        ref={ref}
        onScroll={handleScroll}
        className="flex relative w-full h-full overflow-hidden snap-mandatory snap-x"
      >
        {images.map((path, index) => (
          <ImageItem key={index} src={path} />
        ))}
      </ul>

      <ul className="flex space-x-1 absolute top-2 right-2 z-50">
        {images.map((item, index) => (
          <li
            className={` w-2 h-2 rounded-full transition duration-1000 ${
              current === index ? 'bg-teal-700' : 'bg-white'
            }`}
            key={item + index}
          />
        ))}
      </ul>
    </>
  );
};

const ImageItem = ({ src }: any) => {
  return (
    <li className="flex w-full h-full flex-shrink-0 snap-center">
      <img className="w-full h-full" src={src} />
    </li>
  );
};
