import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'

const getData = async () => {
  const res = await fetch("https://blog-flull-stack.vercel.app/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed")
  }
  return res.json();
};

const MenuCategories = async () => {
  const data = await getData();
  return (
    <div className={styles.categoryList}>
      {
        data?.map(item => (
          <Link href={`/catblog/?cat=${item.slug}`} className={`${styles.categoryItem}`}>{item.title}</Link>
        ))}
  </div>
  )
}

export default MenuCategories