'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import styles from './ImageSwiper.module.css'
import { images } from './images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Page() {
  return (
    <section className='py-12'>
      <div className="mt-20 lg:w-[90%] lg:mx-auto">
                    <Image src="square.svg" width={190} height={190} alt="image" ></Image>
                    <div className="relative bottom-32 left-4 lg:bottom-36 lg:left-16 z-20">
                    <h3 className="bg-gradient-to-r from-blue-500 to-sky-50 bg-clip-text text-transparent font-geist text-2xl md:text-4xl lg:text-6xl font-bold leading-79">Journey Through Moments</h3>
<div className="lg:flex">
    <p className="text-gray-400 text-sm md:text-base lg:text-lg">Where Stories Come Alive: <span className={styles.subheading}>Journey Through Our Gallery</span></p>
    <Image className="m-2 lg:pt-3" src="Frame17.svg" width={190} height={190} alt="image"></Image>
</div>

                    </div>

                </div>
      <div className='container'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          navigation={true}
          className={styles.galleryRow}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.swiperSlide} ${index % 4 === 0 || index % 4 === 3 ? styles.smallSlide : ''}`}
            >
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
