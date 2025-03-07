"use client";
import { LayoutDashboard, LogIn } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <nav className="max-w-5xl mx-auto p-3 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-1">
          <span className="bg-black text-white p-2 rounded-lg">PS.</span>
          <h1 className="font-semibold">Project Sync.</h1>
        </Link>
        <div className="md:flex hidden">
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href={"/dashboard"}>
                <Button
                  color="secondary"
                  variant="ghost"
                  className="flex items-center justify-center"
                >
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </Button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="bg-black text-white rounded-lg px-4 py-1 flex items-center gap-2 hover:bg-black/80 transition-all ease-in-out 0.3s">
              <LogIn className="h-4 w-4" />
              <SignInButton />
            </div>
          </SignedOut>
        </div>
      </nav>
    </>
  );
}
