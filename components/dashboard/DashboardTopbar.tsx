import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { LayoutList, ListTodo, Menu, Settings, UsersRound } from "lucide-react";
import Sidebar from "../Sidebar";

const DashboardTopbar = ({ title }: { title: string }) => {
  return (
    <div>
      <nav className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-2">
          {/* <LayoutDashboard className="w-4 h-4" /> */}
          {title === "Dashboard" ? (
            <LayoutList className="w-4 h-4" />
          ) : title === "Tasks" ? (
            <ListTodo className="w-4 h-4" />
          ) : title === "Members" ? (
            <UsersRound className="w-4 h-4" />
          ) : (
            <Settings className="w-4 h-4" />
          )}
          <span className="text-sm">{title}</span>
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
    </div>
  );
};

export default DashboardTopbar;
