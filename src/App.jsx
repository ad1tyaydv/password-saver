import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Passpage from "./components/passpage";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-500 text-white relative">

        <div className="fixed top-4 right-4 z-50">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <Routes>
          <Route path="/" element={<Passpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
