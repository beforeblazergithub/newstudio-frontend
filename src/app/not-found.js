import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <main className="not-found">
      <Navbar/>
      <div className="404-content">
        <h1>404 – Page Not Found</h1>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
      </div>
    </main>
  )
}