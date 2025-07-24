import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Passpage from "./components/passpage";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-white">
        <div className="p-4 flex justify-end">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/passwords" element={<Passpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
