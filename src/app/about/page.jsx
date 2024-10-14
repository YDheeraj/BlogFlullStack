"use client";
import React from 'react';
import styles from "./about.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCogs, faPaperPlane, faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <div className={styles.textOverlay}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.description}>
            We are highly experienced training data and machine learning professionals, and looking forward to understand your business needs. Our founding team with multi-decade global experience working with MNCs such as TI(USA), Nortel(Canada and France), Nokia(Finland), Vitelcom and Telefonica(Spain), LG(Korea), Mediatek(Taiwan), Canon (Japan), etc.
          </p>
          <br></br>
          <p className={styles.description}>
            Our mission is to inspire and empower individuals through our innovative
            solutions. We believe in the power of community and strive to create
            positive impact in the world.
          </p>
        </div>
      </section>
      <section className={styles.videoContainer}>
        <h1 className={styles.title}>Watch Our Story</h1>
        <iframe
          className={styles.video}
          src="celebai.mp4"
          title="About Us Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section>
        <div className={styles.slideContainer}>
          <div className={styles.slideRow_1}>
            <div className={styles.textContainer}>
              <h2 className={styles.textContainerH2}>Benchmarking and Testing Services</h2>
            </div>
          </div>
          <div className={styles.slide_2_Row_2}>
            <div className={styles.slideRow_2_row}>
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
                <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} className="fa-stack-1x fa-inverse" style={{ color: 'var(--textColor)' }} />
              </span>
              <h4 className={styles.slide_H4}>Testing machine learning models</h4>
              <p>We ensure that your machine learning model is ready for production</p>
              <ul class="list-group list-group-flush">
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  We define a robust acceptance criteria
                </p>
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  We minimize overlap of validation set with training set
                </p>
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  We use TDS to create independent test data
                </p>
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  We improve model accuracy by providing labelled data where it is missing or difficult to get (e.g. person jumping in front of the car)
                </p>
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  We identify inherent bias in the training data<br /><br />
                  e.g. a machine learning system suggesting package deals to customers might have a much higher concentration of customers from a particular country, city, or demographic. It is important then to make the validation set more balanced and representative of what you are going to see in production.
                </p>
              </ul>

            </div>
            <div className={styles.slideRow_2_row}>
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
                <FontAwesomeIcon icon={faCogs} className="fa-stack-1x fa-inverse" style={{ color: 'var(--textColor)' }} />
              </span>
              <h4 className={styles.slide_H4}>Benchmark your platform with the industry standard platforms</h4>
              <p>We help you benchmark your platform with the rest of the world to help you be the best in the world. Quick snapshot for you</p>
              <ul class="list-group list-group-flush">
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  Design of benchmark plan, methodology
                </p>
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  Create virtual machines on AWS, Paperspace, OVH, Azure, and Google Cloud to meet desired hardware spec for benchmark
                </p>
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  Procure hardware from vendors like Lambda Quad
                </p>
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  Create training data (synthetic or real) for various models
                </p>
                <p class="list-group-item">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-primary mr-2" />
                  Prototype and train models such as CNNs (ResNet-50, ResNet-152, InceptionV3, InceptionV4, VGG16, AlexNet), GANs, Object Detection, and LSTMs
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.partnersSection}>
        <h2 className={styles.title}>Our Partners</h2>
        <div className={styles.logos}>
          <Image src="/tencent.png" alt="Partner 1" width={100} height={100} className={styles.logo} />
          <Image src="/enflame.png" alt="Partner 2" width={100} height={100} className={styles.logo} />
        </div>
      </section>
    </div>
  );
};

export default About;
