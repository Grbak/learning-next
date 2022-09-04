import Router from 'next/router';

export default function Items() {
    return (
    <>
        <h2>Items</h2>
        <p>This is a test</p>
        <button onClick={() => Router.push('/')}>Back to home page</button>
    </>);
}