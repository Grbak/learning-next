import Link from "next/link";
import Head from 'next/head';

import { Layout } from "../components/Layout";

export default function Index() {
  return(
    <Layout title="Main" >
      <h1>Main page</h1>
      <h2>I would like to learn next.js</h2>
    </Layout>
  );
}