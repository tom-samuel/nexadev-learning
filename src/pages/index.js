// src/pages/index.js
import Link from 'next/link';


export default function Home() {
return (
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold">Welcome to NexaDev Learning</h1>
<p className="mt-4">Build real-world skills in Full Stack, AI/ML, and UI/UX.</p>
<div className="mt-6">
<Link href="/signup"><button className="px-4 py-2 rounded" style={{background:'#06b6d4'}}>Get Started</button></Link>
</div>
</div>
);
}
