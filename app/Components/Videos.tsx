import { useState } from 'react';
import Image from 'next/image';
import Button from './microComponents/Button';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import 'swiper/css';

import avatar from '@/public/avatar.jpg';
import playImg from '@/public/play.svg';
import add from '@/public/add.svg';

export default function Videos() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  function handleSwiper(swiper: SwiperClass) {
    setActiveSlideIndex(swiper.activeIndex);
  }

  return (
    <div className="videos col-start-3 col-end-9 bg-violet-500 overflow-auto">
      <div className="videos__inner h-full py-8 px-6 flex flex-col items-center gap-4">
        <Swiper
          direction={'vertical'}
          simulateTouch={true}
          mousewheel={true}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={handleSwiper}
          onSwiper={swiper => console.log(swiper)}
          className="videos__list h-full"
          modules={[Mousewheel]}
        >
          <SwiperSlide key={1}>
            <div className="videos__item h-full relative w-[500px] overflow-hidden rounded-xl">
              <Image
                src={avatar}
                alt=""
                className="videos__item-img absolute h-full scale-x-150 top-0 right-0"
              />
              {/* <video src="" className='videos__item-img'></video> */}
              <Button className="videos__item-btn absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform">
                <Image src={playImg} alt="" width={80} height={80} />
              </Button>
              <div className="videos__text absolute bottom-8 left-4 z-40 flex flex-col gap-2 text-violet-50">
                <p className="videos__text-author">Ego_isty</p>
                <p className="videos__text-descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  laborum aliquid nisi eaque doloremque architecto veniam
                  mollitia harum cupiditate! Architecto.
                </p>
              </div>
              {activeSlideIndex === 1 && (
                <div className="videos__item-effect absolute top-0 left-0 w-full h-full bg-neutral-950 opacity-40 z-10"></div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide key={2}>
            <div className="videos__item h-full relative w-[500px] overflow-hidden rounded-xl">
              <Image
                src={avatar}
                alt=""
                className="videos__item-img absolute h-full scale-x-150 top-0 right-0"
              />
              {/* <video src="" className='videos__item-img'></video> */}
              <Button className="videos__item-btn absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform">
                <Image src={playImg} alt="" width={80} height={80} />
              </Button>
              <div className="videos__text absolute bottom-8 left-4 z-40 flex flex-col gap-2 text-violet-50">
                <p className="videos__text-author">Ego_isty</p>
                <p className="videos__text-descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  laborum aliquid nisi eaque doloremque architecto veniam
                  mollitia harum cupiditate! Architecto.
                </p>
              </div>
              {activeSlideIndex === 2 && (
                <div className="videos__item-effect absolute top-0 left-0 w-full h-full bg-neutral-950 opacity-40 z-10"></div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide key={3}>
            <div className="videos__item h-full relative w-[500px] overflow-hidden rounded-xl">
              <Image
                src={avatar}
                alt=""
                className="videos__item-img absolute h-full scale-x-150 top-0 right-0"
              />
              {/* <video src="" className='videos__item-img'></video> */}
              <Button className="videos__item-btn absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform">
                <Image src={playImg} alt="" width={80} height={80} />
              </Button>
              <div className="videos__text absolute bottom-8 left-4 z-40 flex flex-col gap-2 text-violet-50">
                <p className="videos__text-author">Ego_isty</p>
                <p className="videos__text-descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  laborum aliquid nisi eaque doloremque architecto veniam
                  mollitia harum cupiditate! Architecto.
                </p>
              </div>
              {activeSlideIndex === 3 && (
                <div className="videos__item-effect absolute top-0 left-0 w-full h-full bg-neutral-950 opacity-40 z-10"></div>
              )}
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="videos__btns">
          <Button className="py-2 px-8 bg-violet-50 rounded-md">
            <Image src={add} alt="" width={30} height={30} />
          </Button>
        </div>
      </div>
    </div>
  );
}
