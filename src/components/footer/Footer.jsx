import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            {/* <Image src="/logo.png" alt="blog" width={50} height={50}></Image> */}
            <h1 className={styles.logoText}>AI HI FUSION</h1>
          </div>
          <p className={styles.desc}>
            Looking for your AI partner?<br></br>
            Reach us at<br></br>
            sales@celeb-ai.com<br></br>
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">AI</Link>
            <Link href="/">LLM</Link>
            <Link href="/">GPU/GCU</Link>
            <Link href="/">Research</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Linkedin</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Facebook</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        <div>
          <p>Copyright © AiHiFusion 2024</p>
        </div>
        <div>
          <Link href="/">Privacy Policy    </Link>
          <Link href="/">Term of use</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer