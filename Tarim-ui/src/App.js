// TARIM — PREMIUM COLORFUL UI (React + Tailwind)
// Fully frontend, lively, modern, GitHub-ready (single file App.js)

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// ---------- UI COMPONENTS ----------
const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 md:px-6">{children}</div>
);

const Card = ({ title, desc, action }) => (
  <div className="rounded-2xl p-6 shadow-lg bg-white/80 backdrop-blur border hover:shadow-2xl transition">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 mt-2">{desc}</p>
    {action}
  </div>
);

const Button = ({ children, onClick, variant = "primary" }) => {
  const styles = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white",
    success: "bg-green-600 text-white",
    info: "bg-blue-600 text-white",
    warning: "bg-yellow-500 text-black",
  };
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-xl mt-4 ${styles[variant]} hover:opacity-90 transition`}>
      {children}
    </button>
  );
};

// ---------- NAVBAR ----------
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow">
    <Container>
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Tarim</h1>
        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/cyber">E-Cyber</Link>
          <Link to="/learning">E-Learning</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </Container>
  </nav>
);

// ---------- PAGES ----------
const Home = () => (
  <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
    <Container>
      <div className="py-16 text-center">
        <h2 className="text-5xl font-bold">All-in-One Digital Platform</h2>
        <p className="mt-4 text-gray-600">Shop • Learn • Access Services • Build Online</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pb-16">
        <Card title="E-Services" desc="Access KRA, NTSA, eCitizen services easily" action={<Button>Explore</Button>} />
        <Card title="E-Learning" desc="Learn coding, business, and digital skills" action={<Button variant="info">Start Learning</Button>} />
        <Card title="Web Development" desc="Get professional websites & apps" action={<Button variant="success">Get Started</Button>} />
      </div>
    </Container>
  </div>
);

const Services = () => (
  <Container>
    <h2 className="text-3xl font-bold mt-10">Services</h2>
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <Card title="Website Development" desc="Modern responsive websites" />
      <Card title="App Development" desc="Android & web apps" />
      <Card title="Graphic Design" desc="Logos, branding & UI" />
    </div>
  </Container>
);

const Cyber = () => (
  <Container>
    <h2 className="text-3xl font-bold mt-10">E-Cyber</h2>
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <Card title="KRA Services" desc="Returns, PIN, compliance" />
      <Card title="NTSA Services" desc="DL, logbook, bookings" />
      <Card title="eCitizen" desc="Passports, certificates" />
    </div>
  </Container>
);

const Learning = () => (
  <Container>
    <h2 className="text-3xl font-bold mt-10">E-Learning</h2>
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <Card title="Web Development" desc="HTML, CSS, React" />
      <Card title="Cybersecurity" desc="Pentesting & security" />
      <Card title="Business Skills" desc="Entrepreneurship" />
    </div>
  </Container>
);

const Shop = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h2 className="text-3xl font-bold mt-10">Shop</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <Card title="Website Package" desc="KES 15,000" action={<Button onClick={() => navigate("/payment")}>Buy</Button>} />
        <Card title="Logo Design" desc="KES 2,000" action={<Button onClick={() => navigate("/payment")}>Buy</Button>} />
        <Card title="Online Course" desc="KES 1,500" action={<Button onClick={() => navigate("/payment")}>Buy</Button>} />
      </div>
    </Container>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("user", email);
    navigate("/dashboard");
  };
  return (
    <Container>
      <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-bold">Login</h2>
        <input className="border p-2 mt-4 w-full rounded" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </Container>
  );
};

const Dashboard = () => {
  const user = localStorage.getItem("user");
  return (
    <Container>
      <h2 className="text-3xl font-bold mt-10">Dashboard</h2>
      <p className="mt-2 text-gray-600">Welcome {user}</p>
    </Container>
  );
};

const Payment = () => (
  <Container>
    <h2 className="text-3xl font-bold mt-10">Payment</h2>
    <div className="flex flex-wrap gap-4 mt-6">
      <Button variant="success">M-Pesa</Button>
      <Button variant="info">Bank</Button>
      <Button variant="warning">Crypto</Button>
    </div>
  </Container>
);

const Footer = () => (
  <footer className="mt-20 py-6 text-center text-gray-500">
    © {new Date().getFullYear()} Tarim. All rights reserved.
  </footer>
);

// ---------- MAIN APP ----------
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// ---------- SETUP ----------
// 1. npx create-react-app tarim
// 2. cd tarim
// 3. npm install react-router-dom
// 4. npm install -D tailwindcss postcss autoprefixer
// 5. npx tailwindcss init -p
// 6. Configure tailwind.config.js -> content: ["./src/**/*.{js,jsx}"]
// 7. Add Tailwind to index.css
// 8. Replace App.js with this file
// 9. npm start

// ---------- GITHUB ----------
// git init
// git add .
// git commit -m "Tarim UI"
// git branch -M main
// git remote add origin <your-repo-url>
// git push -u origin main
