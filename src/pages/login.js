// src/pages/login.js
import { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';


export default function Login(){
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [error,setError]=useState(null);
const router = useRouter();


const onSubmit = async (e)=>{
e.preventDefault();
try{
await signInWithEmailAndPassword(auth, email, password);
router.push('/dashboard');
}catch(err){setError(err.message)}
}


const signInWithGoogle = async ()=>{
try{const provider=new GoogleAuthProvider(); await signInWithPopup(auth, provider); router.push('/dashboard')}catch(err){setError(err.message)}
}


return (
<div className="max-w-md mx-auto mt-8">
<h2 className="text-xl font-bold mb-4">Log in</h2>
<form onSubmit={onSubmit} className="flex flex-col gap-2">
<input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="p-2 border" />
<input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" className="p-2 border" />
<button type="submit" className="p-2 mt-2" style={{background:'#06b6d4'}}>Log in</button>
</form>
<div className="mt-4">
<button onClick={signInWithGoogle} className="p-2" style={{background:'#ef4444'}}>Sign in with Google</button>
</div>
{error && <p className="text-red-500 mt-2">{error}</p>}
</div>
)
}
