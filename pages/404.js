
import Link from 'next/link';
import { Layout } from '../components/Layout';

import styles from '../styles/errorPage.module.css';

export default function ErrorPage() {
    return(
        <Layout title="Not found">
            <h1 className={styles.error}>404</h1>
            <p>Go <Link href="/"><a>back</a></Link></p>
        </Layout>
    )
}