import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '/components/menu/Menu'
import Comments from '/components/comments/Comments'
import Image from 'next/image'


const getData = async (slug) => {
    const res = await fetch(`https://blog-flull-stack.vercel.app/api/posts/${slug}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      console.log(res);
      throw new Error("Failed")
    }
    return res.json();
  };

const SinglePage = async ({params}) => {

    const {slug} = params;

    const data = await getData(slug)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user?.image && 
                        <div className={styles.userImageContainer}>
                            <Image src={data.user.image} alt="" fill className={styles.avatar}></Image>
                        </div>
                        }
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user?.name}</span>
                            <span className={styles.date}>{new Date(data?.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
                {data?.img && 
                <div className={styles.imageContainer}>
                    <Image src={data.img} alt="" fill className={styles.image}></Image>
                </div>
                }
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description} dangerouslySetInnerHTML={{__html:data?.desc}}></div>
                    <div className={styles.comment}>
                        <Comments postSlug={slug}></Comments>
                    </div>
                </div>
                <Menu></Menu>
            </div>
        </div>
    )
}

export default SinglePage