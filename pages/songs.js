import Router from 'next/router';
import Link from 'next/link';
import { Layout } from '../components/Layout';

export default function Songs({ data }) {
    return (
        <Layout title="Songs">
            <h2>Songs</h2>
            <p>You can see all your favourite songs on this page</p>
            <button onClick={() => Router.push('/')}>Back to home page</button>
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

Songs.getInitialProps = async function load() {
    const response = await fetch('http://localhost:4200/songs');
    const data = await response.json();
    
    return {
        data
    }
}