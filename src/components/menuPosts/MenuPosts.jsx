import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from "./menuPosts.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/popularposts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const MenuPosts = async ({ withImage }) => {
  const { latestPosts } = await getData();
  console.log(latestPosts[0]);

  return (
    <div className={styles.items}>
      {latestPosts.map((post) => (
        <Link href="/" key={post.id} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img || "/default-image.jpeg"} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category}`}>{post.catSlug}</span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.user?.name}</span>
              <span className={styles.date}>- {new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
