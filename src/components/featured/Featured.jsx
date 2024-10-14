import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <b className={styles.logo}>AIHIFusion</b> Blogs.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/ai.jpg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Join us on a journey through cutting-edge technology!</h1>
          <p className={styles.postDesc}>
           Dive into the world of technology where AI, GPUs, and advanced computing converge. Here, we explore the latest trends, breakthroughs, and insights shaping our digital future.<br></br>
           From artificial intelligence to the nuances of large language models, our articles are designed to inform and inspire.
          </p>
          <button className="button">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured