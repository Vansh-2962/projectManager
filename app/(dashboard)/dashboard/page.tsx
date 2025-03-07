"use client";
import {
  LayoutDashboard,
  LayoutList,
  ListChecks,
  ListTodo,
  Menu,
} from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";
import HeadingComp from "@/components/dashboard/heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DashboardPage = () => {
  return (
    <main>
      {/* dashboard topbar */}
      <nav className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-sm">Dashboard</span>
        </div>

        {/* sidebar mobile view */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="w-4 h-4 md:hidden block" />
          </SheetTrigger>
          <SheetContent className="w-[230px]">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </nav>

      {/* dashboard content */}
      <section className="p-4">
        <HeadingComp
          heading={"Workspace overview"}
          description="This is the overview of your workspace"
        />

        {/* dashboard task cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="flex md:flex-row flex-col md:items-center gap-3 mt-8 md:px-5"
        >
          {/* total task */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.3, 
            }}
            className="border hover:scale-105 transition-all ease-in-out 0.5s shadow-md rounded-lg p-3 px-5 md:w-1/2 py-5"
          >
            <span className="text-sm font-medium flex gap-2 items-center justify-between">
              Total task
              <ListTodo className="w-4 h-4" />
            </span>
            <h1 className="text-4xl font-bold">17</h1>
          </motion.div>

          {/* in progress task */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="border hover:scale-105 transition-all ease-in-out 0.5s shadow-md rounded-lg p-3 px-5 md:w-1/2 py-5"
          >
            <span className="text-sm font-medium flex gap-2 items-center justify-between">
              In Progress task
              <LayoutList className="w-4 h-4" />
            </span>
            <h1 className="text-4xl font-bold">11</h1>
          </motion.div>

          {/* completed task */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.9, 
            }}
            className="border hover:scale-105 transition-all ease-in-out 0.5s shadow-md rounded-lg p-3 px-5 md:w-1/2 py-5"
          >
            <span className="text-sm font-medium flex gap-2 items-center justify-between">
              Completed task
              <ListChecks className="w-4 h-4" />
            </span>
            <h1 className="text-4xl font-bold">7</h1>
          </motion.div>
        </motion.div>

        {/* Details */}
        <div className="md:px-5">
          <div className=" mt-7 border rounded-lg">
            <div className="flex border-b">
              <Button variant={"ghost"} size={"sm"}>
                Recent Projects
              </Button>
              <Button variant={"ghost"} size={"sm"}>
                Recent Members
              </Button>
              <Button variant={"ghost"} size={"sm"}>
                Recent Tasks
              </Button>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-zinc-300 rounded-full"></span>
                <small>Project 1</small>
              </div>
              <div className="flex items-center gap-2">
                <small>created By</small>
                <span className="w-6 h-6 bg-zinc-300 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
