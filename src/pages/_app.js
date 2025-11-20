// src/pages/_app.js
import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/Navbar';


export default function MyApp({ Component, pageProps }) {
return (
<AuthProvider>
<Navbar />
<main className="p-4">
<Component {...pageProps} />
</main>
</AuthProvider>
);
}
