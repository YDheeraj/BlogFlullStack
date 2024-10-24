import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'

const Card = ({keyid,item}) => {
    return (
        <div className={styles.container} key={keyid}>
            {item.img && (

                <div className={styles.imageContainer}>
                <Image src={item.img} alt='' fill className={styles.image}></Image>
            </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>{item.createdAt.substring(0, 10)} - {" "}</span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1 >{item.title}</h1>
                </Link>
                <p className={styles.desc} dangerouslySetInnerHTML={{__html:item?.desc.substring(0, 60)}}></p>
                <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div >
    )
}

export default Card