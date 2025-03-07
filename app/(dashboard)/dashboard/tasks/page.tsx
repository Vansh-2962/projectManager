import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import HeadingComp from "@/components/dashboard/heading";
import React from "react";

const TasksPage = () => {
  return (
    <div>
      <DashboardTopbar title="Tasks" />
      <section className="p-4">
        <HeadingComp
          heading="Tasks"
          description="This is the overview of your tasks"
        />
      </section>
    </div>
  );
};

export default TasksPage;
