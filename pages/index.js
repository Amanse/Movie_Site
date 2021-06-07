import Link from 'next/link'

function HomePage() {
    return (
        <>
            <div>Welcome To Next.js</div>
            <Link href="/posts/first"><a>First Post</a></Link>
        </>
    )
}

export default HomePage