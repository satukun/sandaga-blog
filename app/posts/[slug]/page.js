// app/posts/[slug].js

import { GraphQLClient, gql } from 'graphql-request';
import styles from "../../Slug.module.css"
import Link from 'next/link';

const grapcms = new GraphQLClient('https://ap-northeast-1.cdn.hygraph.com/content/clyiuqvba03b008v0xxr6c04g/master');

const QUERY = gql`
{
  posts {
    slug
  }
}
`;

const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      id 
      title
      datePublished
      content {
        html
      }
      photo {
        id
        url
      }
    }
  }
`;

async function getPosts() {
  const { posts } = await grapcms.request(QUERY);
  console.log('Fetched posts:', posts); // デバッグ用ログ
  return posts;
}

async function getPost(slug) {
  const { post } = await grapcms.request(GET_POST, { slug });
  console.log('Fetched post:', post); // デバッグ用ログ
  return post;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className={styles.blog}>
        <h2>{post.title}</h2>
        <p>{post.datePublished}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
        {post.photo && <img src={post.photo.url} alt={post.title} />}
        <div className={styles.backButton}>
          <Link href="/">
          <span>戻る</span>
          </Link>
        </div>
    </main>
  );
}

export const revalidate = 60;
