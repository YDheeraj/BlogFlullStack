"use client";
/* eslint-disable-next-line react/no-unescaped-entities */
import styles from './slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPen, faUsers, faDatabase, faBolt, faCogs, faLaptop, faPaperPlane, faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
          className={styles.swiperSlides}
        >
          <div className={styles.slideContainer}>
            <div className={styles.slideRow_1}>
              <div className={styles.textContainer}>
                <h2 className={styles.textContainerH2}>Creating Training Data is Not Fun</h2>
                <h3 className={styles.textContainerH3}>It's Difficult, Slow, Expensive, and Error Prone</h3>
              </div>
            </div>
            <div className={styles.slideRow_2}>
              <div className={styles.slideRow_2_row}>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
                  <FontAwesomeIcon icon={faDatabase} className="fa-stack-1x fa-inverse" style={{ color: 'var(--textColor)' }} />
                </span>
                <h4 className={styles.slide_H4}>Limited Machine Learning Data</h4>
                <p >Your model needs thousands of images of product with defects but you have very few!</p>
              </div>
              <div className={styles.slideRow_2_row}>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
                  <FontAwesomeIcon icon={faUsers} className="fa-stack-1x fa-inverse" style={{ color: 'var(--textColor)' }} />
                </span>
                <h4 className={styles.slide_H4}>Manual Training Data Collection</h4>
                <p >Time consuming or impossible <br></br>(person jumping in front of the vehicle?)</p>
              </div>
              <div className={styles.slideRow_2_row}>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
                  <FontAwesomeIcon icon={faPen} className="fa-stack-1x fa-inverse" style={{ color: 'var(--textColor)' }} />
                </span>
                <h4 className={styles.slide_H4}>Labelling Collected Data</h4>
                <p >Terabytes of data generated per day by putting a camera on vehicles that are driving around, but how to label it now?</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
          className={styles.swiperSlides}
        >
          <div className={styles.slideContainer}>
            <div className={styles.slideRow_1}>
              <div className={styles.textContainer}>
                <h2 className={styles.textContainerH2}>Training Data Synthesis (TDS)</h2>
              </div>
            </div>
            <div className={styles.slide_2_Row_2}>
              <div className={styles.slideRow_2_row}>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
                  <FontAwesomeIcon icon={faBolt} className="fa-stack-1x fa-inverse" style={{ color: 'var(--textColor)' }} />
                </span>
                <h4 className={styles.slide_H4}>What</h4>
                <p>We help you with high quality training data for your computer vision models.&nbsp;<br></br>Our expert team with deep understanding of training data needs for various market verticals, and the tailor-made suite of tools are the foundation for providing you high-quality datasets.</p>
              </div>
              <div className={styles.slideRow_2_row}>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
                  <FontAwesomeIcon icon={faLaptop} className="fa-stack-1x fa-inverse" style={{ color: 'var(--textColor)' }} />
                </span>
                <h4 className={styles.slide_H4}>How</h4>
                <ul class="list-group list-group-flush">
                  <p>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-5" />
                    Training data generated on your command
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-5" />
                    Provide sample image (e.g. road with cars and people)
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-5" />
                    Identify object(s) of interest (car/person)
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-5" />
                    Specify requirement parameters (e.g. number of training images needs, variation types etc.)
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-5" />
                    Run TDS to get the generated training data
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
