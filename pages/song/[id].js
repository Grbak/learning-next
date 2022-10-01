
import { useState, useEffect } from 'react';
import { useRouter, push } from "next/router"
import { Layout } from "../../components/Layout";

export default function Song({ data: serverData }) {
    const [data, setData] = useState(serverData);
    const router = useRouter();

    useEffect(() => {
        const load = async () => {
            const response = await fetch (`http://localhost:4200/songs/${router.query.id}`);
            const data = await response.json();
            setData(data);
        }

        if (!data) {
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
        <Layout>
            <button onClick={() => push('/songs')}>Back to all songs</button>
            <h2>Song {router.query.id}</h2>
            <div>{JSON.stringify(data, null, 2)}</div>
        </Layout>
    )
}

Song.getInitialProps = async function load(ctx) {
    if(!ctx.req) {
        return {
            data: null
        }
    }
    const response = await fetch(`http://localhost:4200/songs/${ctx.query.id}`);
    const data = await response.json();
    return {
        data
    }
}