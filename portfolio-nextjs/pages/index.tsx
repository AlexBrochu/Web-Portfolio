import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import { GetServerSideProps } from "next";
import HelloHandler from "../api/hello";
import Post, { PostData } from "../components/post/post";

export default function Home({
  allPostsData,
  data,
}: {
  allPostsData: PostData[];
  data: any;
}) {
  console.log("in component", data);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction] {data}</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Post id={id} date={date} title={title} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allPostsData = getSortedPostsData();
  const res = await HelloHandler();
  let data = res;
  if (res && res.error) {
    data = res.error;
  }
  return {
    props: {
      allPostsData,
      data,
    },
  };
};
