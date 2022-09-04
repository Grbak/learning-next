import { useRouter } from "next/router"

export default function Item() {
    const router = useRouter();

    return (<h2>Item {router.query.id}</h2>)
}