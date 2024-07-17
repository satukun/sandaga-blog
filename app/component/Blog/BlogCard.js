import React from 'react'
import styles from '../../BlogCard.module.css'
import Link from 'next/link'

const BlogCard = ({photo, title, date, slug}) => {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${slug}`}>
        {/* <div className={styles.imgContainer}>
          <img src={photo.url} />
        </div> */}
        <div className={styles.text}>
          <h2>{title}</h2>
          <div className={styles.details}>
            <div className={styles.date}>
              {date}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard