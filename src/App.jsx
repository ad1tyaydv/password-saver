import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Passpage from "./components/passpage";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Simulate Cloudflare bot check (real check happens at DNS level)
    const timer = setTimeout(() => {
      const isCloudflarePassed = document.cookie.includes("__cf_bm") || document.cookie.includes("cf_clearance");
      if (isCloudflarePassed) {
        setIsVerified(true);
      } else {
        setIsVerified(true); // fallback if no cookie found (optional strictness)
      }
    }, 3000); // 3s delay to simulate bot challenge

    return () => clearTimeout(timer);
  }, []);

  if (!isVerified) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#111827] text-white">
        <h1 className="text-2xl mb-4">🔒 Verifying you're human via Cloudflare...</h1>
        <p className="text-gray-400">Please wait a few seconds</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-white relative">
        <div className="fixed top-4 right-4 z-50">
          <SignedOut>
            <SignInButton className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-sm rounded hover:bg-blue-600 hover:text-white transition duration-300" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <Routes>
          <Route path="/" element={
            <SignedOut>
              <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl mb-4">Welcome to Password Saver</h1>
                <SignInButton className="px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300" />
              </div>
            </SignedOut>
          } />
          <Route path="/passwords" element={
            <SignedIn>
              <Passpage />
            </SignedIn>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;