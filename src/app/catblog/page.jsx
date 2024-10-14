import React from 'react'
import styles from "./catBlogPage.module.css"
import CardList from "@/components/cardList/CardList"
import Menu from "@/components/menu/Menu"


const CatBlogPage = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat}></CardList>
            <Menu></Menu>
        </div>
    </div>
  )
}

export default CatBlogPage