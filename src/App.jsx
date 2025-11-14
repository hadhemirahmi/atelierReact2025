import AppNavbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ContactForm from "./components/ContactForm";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
return (
<div>
<AppNavbar />
<section id="home" className="text-center mt-6 p-10 bg-gray-100">

<h1 className="text-4xl font-bold">Bienvenue sur l'application multi-
CSS</h1>

<p className="mt-4 text-lg">Une application React utilisant plusieurs
frameworks CSS</p>
</section>
<Dashboard />
<section id="contact" className="mt-10 mb-10">
<ContactForm />
</section>
</div>
);
}