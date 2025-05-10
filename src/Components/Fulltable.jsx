import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description: "I want to learn React Js With the help of Learn with Sumit",
  tags: ["web", "Javascript", " Node"],
  priority: "High",
  isFavorite: true,
};
export default function Fulltable() {
  const [tasks, settaasks] = useState([defaultTask]);
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          {/* Search Box */}
          <SearchTask></SearchTask>
          {/* Search Box Ends */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction></TaskAction>
            <TaskList tasks={tasks}></TaskList>
          </div>
        </div>
      </section>
    </>
  );
}
