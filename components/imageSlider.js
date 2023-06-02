import Image from 'next/image';
import { useEffect, useState } from 'react';
import slider1 from '/public/slider/1.jpeg';
import slider2 from '/public/slider/2.jpeg';
import slider3 from '/public/slider/3.jpeg';
import slider4 from '/public/slider/4.jpeg';
import slider5 from '/public/slider/5.jpeg';

export default function ImageSlider() {
  const [image, setImage] = useState(0);
  const images = [slider1, slider2, slider3, slider4, slider5];

  useEffect(() => {
    images.forEach((img) => {
      console.log(`pre fetching ${img.src}`);
      fetch(img.src);
    });
    const interval = setInterval(() => {
      setImage((img) => (img == images.length - 1 ? 0 : img + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full lg:w-1/2 relative lg:absolute lg:inset-y-0 lg:right-0 h-56 sm:h-72 md:h-96 overflow-hidden">
      {images.map((img, index) => {
        const show = index == image;
        return (
          <div key={`slider-${index}`} className="absolute left-0 top-0">
            <Image
              className={
                'object-cover w-full h-auto lg:h-full transition-all duration-1000 ease-in-out ' +
                (show ? 'opacity-100 scale-105' : 'opacity-0 scale-100')
              }
              src={img}
              alt={`slider-${index}`}
            />
          </div>
        );
      })}
    </div>
  );
}
