import { useRouter } from "next/router"
import { Layout } from "../../components/Layout";

export default function Song() {
    const router = useRouter();
    return (
        <Layout>
            <h2>Song {router.query.id}</h2>
        </Layout>
    )
}