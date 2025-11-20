// src/components/Navbar.js
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';


export default function Navbar() {
const { user, logout } = useAuth();


return (
<nav className="p-4 flex justify-between items-center shadow-sm" style={{background:'#0f172a', color:'#fff'}}>
<div className="flex items-center gap-3">
<img src="/logo.png" alt="NexaDev" width={40} />
<span className="font-bold">NexaDev Learning</span>
</div>


<div className="flex items-center gap-4">
<Link href="/">Home</Link>
<Link href="/courses">Courses</Link>
{user ? (
<>
<Link href="/dashboard">Dashboard</Link>
<button onClick={logout} className="ml-2">Logout</button>
</>
) : (
<>
<Link href="/login">Login</Link>
<Link href="/signup">Sign up</Link>
</>
)}
</div>
</nav>
);
}
