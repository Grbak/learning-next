import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { Layout } from '../components/Layout';

export default function Songs({ data: serverData }) {
    const [data, setData] = useState(serverData);

    useEffect(() => {
        const load = async () => {
            const response = await fetch('http://localhost:4200/songs');
            const data = await response.json();
            setData(data);
        }

        if (!serverData) {
            load();
        }
    }, []);

    if (!data) {
        return (
            <Layout>
                <p>
                    Loading...
                </p>
            </ Layout>
        )
    }

    return (
        <Layout title="Songs">
            <button onClick={() => Router.push('/')}>Back to home page</button>
            <h2>Songs</h2>
            <p>You can see all your favourite songs on this page</p>
            <ul>
                {data.map((song) => (
                    <li key={`${song.authot}-${song.title}`}>
                        <Link href={`/song/[id]`} as={`/song/${song.id}`}>
                            <a>
                                {song.author} - {song.title} - {song.bpm}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

Songs.getInitialProps = async function load(ctx) {
    if (!ctx.req) {
        return {
            data: null
        }
    }
    const response = await fetch('http://localhost:4200/songs');
    const data = await response.json();
    
    return {
        data
    }
}