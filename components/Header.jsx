import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBoxIcon } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UseMenu from "./use-menu";

const Header = () => {
    return (
        <div className="mx-auto py-2 px-2 flex justify-between items-center shadow-md border-2">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={180}
                    height={40}
                    priority // Optional: improves LCP for logo
                />
            </Link>
            <div className="flex items-center">
                <Link href="/events?create=true">
                    <Button><PenBoxIcon/> Create Event</Button>
                </Link>
                <SignedOut >
                    <SignInButton forceRedirectUrl="/dashboard">

                <Button variant="destructive" className="ml-1">Login</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UseMenu />
                </SignedIn>

            </div>
        </div>
    );
};

export default Header;
