// src/pages/dashboard.js
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';


export default function Dashboard(){
const { user, loading } = useAuth();
const router = useRouter();
const [profile, setProfile] = useState(null);


useEffect(()=>{
if(!loading && !user) router.push('/login');
// TODO: fetch user profile from Firestore
},[user,loading]);


if(loading) return <p>Loading...</p>


return (
<div className="max-w-4xl mx-auto mt-8">
<h2 className="text-2xl font-bold">Dashboard</h2>
<p className="mt-4">Welcome, {user?.email}</p>
<div className="mt-6">Your enrolled courses and progress will appear here.</div>
</div>
)
}
