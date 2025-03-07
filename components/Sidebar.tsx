"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import {
  ChevronDown,
  LayoutDashboard,
  ListTodo,
  Settings,
  UsersRound,
} from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const user = useUser();
  return (
    <>
      <div className="flex w-56  bg-[#F2F2F2] h-full p-3 flex-col justify-between">
        <div>
          {/* Logo */}
          <Link href={"/"} className="flex items-center text-sm px-1 gap-1">
            <span className="bg-black text-white p-1 rounded-lg">PS.</span>
            <h1 className="font-semibold">Project Sync.</h1>
          </Link>

          {/* workspace */}
          <div className="px-1 py-4 flex flex-col gap-2">
            <small className="mt-4 text-zinc-500 font-semibold">
              workspace
            </small>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-zinc-200 rounded-sm"></span>
                    <p className="leading-3.5 text-sm">
                      My Workspace{" "}
                      <small className="text-zinc-500">Private</small>{" "}
                    </p>
                  </div>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="font-semibold">
                  Workspaces
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Hello</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sidebar nav links */}
            <section className="flex flex-col gap-2 mt-3 px-1 text-zinc-500">
              <div
                className={` 
                ${
                  pathname === "/dashboard" &&
                  "bg-accent-foreground text-zinc-200 hover:text-zinc-300 hover:bg-zinc-900"
                }
                flex items-center gap-2 hover:bg-zinc-200 py-1 px-2 rounded-lg cursor-pointer`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <Link href={"/dashboard"} className="text-sm">
                  Dashboard
                </Link>
              </div>
              <div
                className={` 
                ${
                  pathname === "/dashboard/tasks" &&
                  "bg-accent-foreground text-zinc-200 hover:text-zinc-300 hover:bg-zinc-900"
                }
                flex items-center gap-2 hover:bg-zinc-200 py-1 px-2 rounded-lg cursor-pointer`}
              >
                <ListTodo className="w-4 h-4" />
                <Link href={"/dashboard/tasks"} className="text-sm">
                  Tasks
                </Link>
              </div>
              <div
                className={` 
                ${
                  pathname === "/dashboard/members" &&
                  "bg-accent-foreground text-zinc-200 hover:text-zinc-300 hover:bg-zinc-900"
                }
                flex items-center gap-2 hover:bg-zinc-200 py-1 px-2 rounded-lg cursor-pointer`}
              >
                <UsersRound className="w-4 h-4" />
                <Link href={"/dashboard/members"} className="text-sm">
                  Members
                </Link>
              </div>
              <div
                className={` 
                ${
                  pathname === "/dashboard/settings" &&
                  "bg-accent-foreground text-zinc-200 hover:text-zinc-300 hover:bg-zinc-900"
                }
                flex items-center gap-2 hover:bg-zinc-200 py-1 px-2 rounded-lg cursor-pointer`}
              >
                <Settings className="w-4 h-4" />
                <Link href={"/dashboard/settings"} className="text-sm">
                  Settings
                </Link>
              </div>
            </section>
          </div>

          <Separator />

          {/* projects */}
          <div className="px-1 py-4 flex flex-col gap-2">
            <small className="mt-4 text-zinc-500 font-semibold">projects</small>
            <div className="flex items-center gap-2 hover:bg-zinc-200 py-1 px-2 rounded-lg cursor-pointer">
              <span className="w-8 h-8 bg-zinc-200 rounded-full"></span>
              <Link href={"/dashboard"} className="text-sm text-zinc-500">
                Project 1
              </Link>
            </div>
          </div>
        </div>

        {/* Users Profile */}
        <div className="w-full">
          <div className="flex items-center gap-2">
            <UserButton />
            <div className="flex flex-col">
              <span className="text-sm text-nowrap">
                {user?.user?.fullName}
              </span>
              <small className="text-xs text-zinc-500">
                {user?.user?.emailAddresses[0].emailAddress}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
