import React from 'react'
import styles from "./menu.module.css"
import MenuPosts from '@/components/menuPosts/MenuPosts'
import MenuCategories from '@/components/menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* <MenuPosts withImage={false}></MenuPosts> */}
      <h2 className={styles.subtitle}>Discovered by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories></MenuCategories>
      {/* <h2 className={styles.subtitle}>Chosen by the editor</h2> */}
      {/* <h1 className={styles.title}>Editors Pick</h1> */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true}></MenuPosts>
    </div>
  )
}

export default Menu