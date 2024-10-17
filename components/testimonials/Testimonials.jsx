"use client";
/* eslint-disable-next-line react/no-unescaped-entities */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./testimonials.module.css";
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className={styles.swiperContainer}>
      <h2 className={styles.heading}>Client Testimonials</h2>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.testimonialContent}>
            <p className={styles.testimonialText}>
              "We specialize in creating short patient summaries from tens and sometimes hundreds of patient reports, X-rays, etc. Celeb-AI helped us in creating the AI models that we needed to process this complex piece of data so we could generate a summary."
            </p>
            <p className={styles.clientName}>— Dr. Gogia, Healthcare Services Company</p>
            {/* <img src="/b1.jpg" alt="Dr. Gogia" className={styles.clientImageRight} /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.testimonialContent}>
            <p className={styles.testimonialText}>
              "For our company, we were trying to solve the problem of making shelf audits better. The idea we had is that we could analyze missing items from a picture and then automatically place orders. Celeb-AI helped us in building this model. They reduced the time and effort it took to collect huge amounts of high-quality labelled data for our customers."
            </p>
            <p className={styles.clientName}>— Peter Davis, Tech Lead at Large Retail Company</p>
            {/* <img src="/b2.jpg" alt="Peter Davis" className={styles.clientImageLeft} /> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
