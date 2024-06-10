import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla mx-auto" ref={emblaRef}>
      <div className="embla__container">

        <div className="embla__slide h-[35rem]">
          <img src='/main_apt1.jpg' alt="Slide 1"/>
        </div>

        <div className="embla__slide h-[35rem]">
          <img src="/main_apt8 copy.jpg" alt="Slide 2" className="object-cover" />
        </div>

      </div>
    </div>
  );
}
