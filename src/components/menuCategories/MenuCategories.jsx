import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
    <Link href="/blog?cat=LLM" className={`${styles.categoryItem}`}>LLM</Link>
    <Link href="/blog?cat=AI" className={`${styles.categoryItem}`}>AI</Link>
    <Link href="/blog?cat=GPU/GCU" className={`${styles.categoryItem}`}>GPU/GCU</Link>
    <Link href="/blog?cat=Trends" className={`${styles.categoryItem}`}>Trends</Link>
    <Link href="/blog?cat=Research" className={`${styles.categoryItem}`}>Research</Link>
  </div>
  )
}

export default MenuCategories