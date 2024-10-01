import { useRef } from 'react';

import BoxReveal from '@/components/ui/box-reveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import config from '@/utils/config';
import BlurFade from '@/components/ui/blur-fade';

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <>
      <Carousel
        className="mx-auto max-w-2xl mb-24"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {config.home.banners.map((ele, i) => (
            <CarouselItem key={'carousel-' + i}>
              <BlurFade delay={0.25}>
                <img
                  className="mx-auto rounded-lg"
                  src={ele}
                  alt={'carousel-' + i}
                />
              </BlurFade>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      {config.home.text.map((ele, i) => (
        <div
          dir="rtl"
          key={'home-text-' + i}
          className="mt-5 bg-blue-50/90 p-5 rounded-lg"
        >
          <BoxReveal boxColor={'#4db6fb'} duration={0.5}>
            <p className="text-5xl font-semibold">{ele.title}</p>
          </BoxReveal>
          <BoxReveal boxColor={'#4db6fb'} duration={0.5}>
            <p className="text-xl mt-2">{ele.content}</p>
          </BoxReveal>
        </div>
      ))}
    </>
  );
}
