import Image from "next/image";
import styles from "./homepage.module.css";
import ParticlesBackground from "@/components/partical/ParticlesBackground"
import Slider from "@/components/slider/Slider"
import BlogCards from "@/components/blogcards/BlogCards"
import Testimonials from "@/components/testimonials/Testimonials"

import Category from "@/components/categoryList/CategoryList"

interface SearchParams {
  page?: string;
}

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const page = parseInt(searchParams.page || "1");
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Transforming Businesses with Intelligent Solutions
          </h1>
          <p className={styles.postDesc}>
            At AIHIFUSION, we harness the power of machine learning and
            artificial intelligence to drive innovation and efficiency for
            businesses across industries. Our cutting-edge technologies are
            designed to solve complex challenges, enhance decision-making, and
            unlock new opportunities for growth.
          </p>
          <button className="button">Read More</button>
        </div>
        <div className={styles.holoContainer}>
        <ParticlesBackground />
          <Image src="/aipng.png" alt="" fill className={styles.image}></Image>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider></Slider>
      </div>
      <BlogCards></BlogCards>
      <Testimonials></Testimonials>
    </div>
  );
}
