import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Blog</title>
        </Head>
        <h1>Read First Post</h1>

        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Layout>
    </>
  );
}
