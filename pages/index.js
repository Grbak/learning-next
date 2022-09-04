import Link from "next/link";
import Head from 'next/head';

export default function Index() {
  return(
    <>
    <Head>
      <title>Test | learning next.js</title>
      <meta name="keywords" content="next,javascript,react" />
      <meta charSet="utf-8"/>
    </Head>
      <h1>I would like to learn next.js</h1>
      <Link href="./items">Items</Link>
    </>
  );
}