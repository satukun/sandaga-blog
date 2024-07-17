import Image from "next/image";
import {GraphQLClient, gql} from 'graphql-request'
import styles from "../../BlogCard.module.css";
import BlogCard from "./BlogCard";

const grapcms = new GraphQLClient('https://ap-northeast-1.cdn.hygraph.com/content/clyiuqvba03b008v0xxr6c04g/master');

const QUERY = gql`
{
  posts {
    id
    title
    datePublished
    slug
    createdAt
    content {
      html
    }
    photo {
      url
      createdBy {
        id
      }
    }
  }
}
`;

async function getPosts() {
  const {posts} = await grapcms.request(QUERY);
  return posts
}

export default async function Blog() {
  const posts = await getPosts();
  return (
      <section className={styles.title}>
        <div className={styles.gridWrapper}>
          {posts.map((post) => (
            <BlogCard photo={post.photo} title={post.title} date={post.datePublished} slug={post.slug} key={post.id}/>
          ))}
        </div>
      </section>
  );
}


export const revalidate = 60; // このページは60秒ごとに再生成されます