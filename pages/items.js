import Router from 'next/router';
import { Layout } from '../components/Layout';

export default function Items() {
    return (
        <Layout title="Items">
            <h2>Items</h2>
            <p>This is a test</p>
            <button onClick={() => Router.push('/')}>Back to home page</button>
        </Layout>
    );
}