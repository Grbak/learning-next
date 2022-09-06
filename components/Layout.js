import Link from 'next/link';
import Head from 'next/head';

export function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{`${title} | learning next.js`}</title>
                <meta name="keywords" content="next,javascript,react" />
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <Link href="/"><a>Main</a></Link>
                <Link href="/items"><a>Items</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    right: 0;
                    top: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center; 
                }

                nav a {
                    color: #fff;
                    text-decoration: none;
                }

                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}</style>
        </>
    )
}