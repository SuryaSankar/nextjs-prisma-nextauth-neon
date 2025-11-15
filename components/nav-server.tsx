import Link from "next/link";
import { auth } from "../auth"
import SignIn from "./sign-in";
import SignOut from "./sign-out";

export default async function Navigation() {  
    const session = await auth();

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
                        {session?.user ? (
                            <SignOut/>
                        ) : (
                            <SignIn/>
                        )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
