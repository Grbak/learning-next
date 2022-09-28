import { useRouter } from "next/router"
import { Layout } from "../../components/Layout";

export default function Song({ data }) {
    const router = useRouter();
    return (
        <Layout>
            <h2>Song {router.query.id}</h2>
            <div>{JSON.stringify(data, null, 2)}</div>
        </Layout>
    )
}

Song.getInitialProps = async function load(ctx) {
    const response = await fetch(`http://localhost:4200/songs/${ctx.query.id}`);
    const data = await response.json();
    return {
        data
    }
}