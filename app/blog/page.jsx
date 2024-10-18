import React from 'react'
import styles from "./blogPage.module.css"
import Featured from "/components/featured/Featured"
import Category from "/components/categoryList/CategoryList"
import CardList from "/components/cardList/CardList"


const BlogPage = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured></Featured>
      <Category></Category>
      <div className={styles.content}>
      <CardList page={page}></CardList>
      </div>
    </div>
  )
}

export default BlogPage