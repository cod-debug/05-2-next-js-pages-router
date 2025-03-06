import Link from "next/link";

function NewsPage(){
    return (
        <>
            <h1>The news Page</h1>
            <ul>
                <li>
                    <Link href="/news/next js is a great framework">Next js is a greate framework.</Link>
                </li>
                <li>
                    <Link href="/news/something else">Something else.</Link>
                </li>
            </ul>
        </>
    )
}

export default NewsPage;