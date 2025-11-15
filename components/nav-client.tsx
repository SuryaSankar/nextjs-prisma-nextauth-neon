"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import SignIn from "./sign-in";
// import { SignInModal } from "../auth/SignInModal";
// import { SignUpModal } from "../auth/SignUpModal";
// import { UserDropdown } from "./UserDropdown";

export default function Navigation() {
  const { data: session, status } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-[#369b6f]">
              Prisma + NextAuth + Neon
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/posts"
              className="text-gray-700 font-medium hover:text-[#369b6f] transition-all duration-200"
            >
              Posts
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {status === "loading" ? (
              <div className="h-10 w-20 bg-gray-200 animate-pulse rounded-lg" />
            ) : session?.user ? (
                <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
            ) : (
              <>
                <SignIn/>
                {/* <button
                  onClick={() => setIsSignInOpen(true)}
                  className="hidden sm:block text-gray-700 font-medium hover:text-[#369b6f] transition-all duration-200"
                >
                  Sign In
                </button> */}
                <button
                  onClick={() => setIsSignUpOpen(true)}
                  className="px-3 py-2 sm:px-4 bg-[#369b6f] hover:bg-[#2d8159] text-white rounded-lg transition-all duration-200 font-medium shadow-sm hover:-translate-y-0.5 hover:shadow-md text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Sign Up Free</span>
                  <span className="sm:hidden">Sign Up</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
    {/* <SignInModal
      isOpen={isSignInOpen}
      onClose={() => setIsSignInOpen(false)}
      onSwitchToSignUp={() => {
        setIsSignInOpen(false);
        setIsSignUpOpen(true);
      }}
    />
    <SignUpModal
      isOpen={isSignUpOpen}
      onClose={() => setIsSignUpOpen(false)}
      onSwitchToSignIn={() => {
        setIsSignUpOpen(false);
        setIsSignInOpen(true);
      }}
    /> */}
    </>
  );
}
