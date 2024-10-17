import Image from 'next/image';
import Link from 'next/link';
import styles from './blogCard.module.css';
import React from "react";

const getData = async () => {
    const res = await fetch("https://blog-flull-stack.vercel.app/api/latestposts", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }
    return res.json();
};

const BlogCards = async () => {
    const { latestPosts } = await getData();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Latest Articles</h1>
            {latestPosts.map((item) => (
                <div className={styles.card} key={item.id}>
                    {item.img && (
                        <div className={styles.imageContainer}>
                            <Image src={item.img} alt={item.title} fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <div className={styles.details}>
                            <span className={styles.date}>{new Date(item.createdAt).toLocaleDateString()} - {" "}</span>
                            <span className={styles.category}>{item.catSlug}</span>
                        </div>
                        <Link href={`/posts/${item.slug}`}>
                            <p className={styles.heading}>{item.title}</p>
                        </Link>
                        <Link href={`/posts/${item.slug}`} className={styles.link}>Read More &gt;</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogCards;
